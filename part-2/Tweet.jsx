function Tweet({ username, name, date, msg }) {
//TODO: come back to this after trying to render in the DOM, what the heck???
    const twitterBlue = "#1DA1F2";
    const twitterFont = "sans-serif";
    const tweetBorder = `solid 3px ${twitterBlue}`;

    const myStyles = {
        color: twitterBlue,
        fontFamily: twitterFont,
        margin: "15px",
        border: `solid 3px ${twitterBlue}`
    };

    return (
    <div style = { myStyles }>
            <span>{ username }</span>
            <span>{ name }</span>
            <span>{ date }</span>
            <p>{ msg }</p> 
    </div>
    );
}