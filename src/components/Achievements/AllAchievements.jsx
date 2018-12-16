const React = require("react");
const { Pane, Button } = require("evergreen-ui");
const AchievementsNavigation = require("../../dumb-components/AchievementsNavigation/AchievementsNavigation");

function AllAchievements(props) {
    const {
        db,
        handlePageChange,
        currentPage,
        ImgOnClick,
        chunkSize,
        dbLength,
        setPage,
    } = props;
    const size = (dbLength / chunkSize) >> 0;
    console.log(size);
    return (
        <React.Fragment>
            <AchievementsNavigation
                currentPage={currentPage}
                chunkSize={chunkSize}
                setPage={setPage}
                handlePageChange={handlePageChange}
            />
            <Pane
                display="grid"
                gridTemplateColumns="repeat(8, 1fr)"
                gridGap="10px"
                width="100vw"
                marginX="auto"
                justifyItems="center"
                padding="1rem"
            >
                {(db[currentPage] || []).map(achievement => {
                    return (
                        <img
                            onClick={props.ImgOnClick}
                            className={[
                                achievement.earned
                                    ? "achievement_earned"
                                    : "achievement_not_earned",
                                "achievement_icon",
                            ].join(" ")}
                            key={achievement.id}
                            src={achievement.imageUrl}
                            alt={`achievement #${achievement.id}`}
                        />
                    );
                })}
            </Pane>
        </React.Fragment>
    );
}
module.exports = AllAchievements;
