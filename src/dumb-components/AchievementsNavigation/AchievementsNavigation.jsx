const React = require("react");
const { Pane, SearchInput, Button } = require("evergreen-ui");
class AchievementsNavigation extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {
            currentPage,
            chunkSize,
            setPage,
            handlePageChange,
        } = this.props;

        return (
            <Pane
                display="flex"
                justifyContent="space-around"
                flexFlow="row-reverse"
                alignItems="center"
                marginY="2rem"
            >
                <Pane width="32%" display="flex" justifyContent="space-around">
                    <Button onClick={() => handlePageChange("backward")}>
                        &lt;&lt;
                    </Button>
                    {[1, 2, 3, 4].map((i, index) => {
                        return (
                            <Button
                                appearance={index === 0 ? "primary" : null}
                                onClick={() =>
                                    setPage((currentPage + index) % chunkSize)
                                }
                                key={index}
                            >
                                {(currentPage + index) % chunkSize}
                            </Button>
                        );
                    })}
                    <Button onClick={() => setPage(chunkSize)}>
                        {chunkSize}
                    </Button>
                    <Button onClick={() => handlePageChange("forward")}>
                        &gt;&gt;
                    </Button>
                </Pane>
                <form>
                    <SearchInput placeholder="Search for an achievement ..." />
                    <Button>Search</Button>
                </form>
            </Pane>
        );
    }
}

module.exports = AchievementsNavigation;
