const React = require("react");
const { readFile } = window.require("fs");
const { Pane, Heading, Button } = require("evergreen-ui");
const AchievementShowcase = require("./AchivementShowcase");
const Loader = require("../../dumb-components/Loader/Loader");
const Dialog = require("../../dumb-components/Dialog/Dialog.jsx");
const _ = require("lodash");
const ReactDOM = require("react-dom");
const AllAchievements = require("./AllAchievements");

class Achievements extends React.PureComponent {
    constructor(props) {
        super(props);
        this.chunkSize = 50;
        this.state = {
            showcaseData: [],
            db: [],
            loading: false,
            modalIsShown: false,
            currentPage: 0,
        };
        this.setPageNumberHandler = this.setPageNumberHandler.bind(this);
        this.handlePageChange = this.handlePageChange.bind(this);
    }

    componentDidMount() {
        this.setState({ loading: true });
        const { achievementShowcase, earnedAchievements } = this.props.data;
        //Read the static files' database
        readFile("./assets/sc2-static-data.json", (err, data) => {
            if (err) throw new Error(err);
            const db = JSON.parse(data);
            this.dbLength = db.achievements.length;
            //Find data about showcase achievements and extract it
            const showcaseData = db.achievements.filter(achievement => {
                return achievementShowcase.includes(achievement.id);
            });
            //Modify the db by adding info about user earning it or not
            let dbExtended = db.achievements.map(achievement => {
                const isEarned = earnedAchievements.some(earned => {
                    return earned.achievementId === achievement.id;
                });
                return { ...achievement, earned: isEarned };
            });
            dbExtended = _.chunk(dbExtended, this.chunkSize);
            this.setState({
                showcaseData,
                db: dbExtended,
                loading: false,
            });
        });
    }

    componentDidUpdate(prevProps, prevState) {
        //Scroll to the top after changing the page
        if (prevState.currentPage !== this.state.currentPage)
            ReactDOM.findDOMNode(this).scrollIntoView();
    }

    setPageNumberHandler(number) {
        this.setState({ currentPage: number });
    }

    handlePageChange(direction) {
        if (this.state.currentPage === 0 && direction === "backward") return;
        return this.setState(state => {
            return {
                currentPage:
                    state.currentPage + 1 * (direction === "backward" ? -1 : 1),
            };
        });
    }

    render() {
        const { currentPage, showcaseData, loading, db } = this.state;
        return (
            <React.Fragment>
                {loading ? (
                    <Loader />
                ) : (
                    <div className="achievements">
                        <Dialog
                            isShown={this.state.modalIsShown}
                            onClose={() =>
                                this.setState({ modalIsShown: false })
                            }
                        />
                        <AchievementShowcase showcaseData={showcaseData} />
                        <AllAchievements
                            setPage={this.setPageNumberHandler}
                            db={db}
                            currentPage={currentPage}
                            ImgOnClick={() =>
                                this.setState({
                                    modalIsShown: true,
                                })
                            }
                            chunkSize={this.chunkSize}
                            dbLength={this.dbLength}
                            handlePageChange={this.handlePageChange}
                        />
                        <Pane
                            display="flex"
                            padding="20px"
                            justifyContent="space-evenly"
                        >
                            <Button
                                onClick={this.handlePageChange.bind(
                                    this,
                                    "backward"
                                )}
                            >
                                Previous Page
                            </Button>
                            <Button
                                onClick={this.handlePageChange.bind(
                                    this,
                                    "forward"
                                )}
                            >
                                Next Page
                            </Button>
                        </Pane>
                    </div>
                )}
            </React.Fragment>
        );
    }
}

module.exports = Achievements;
