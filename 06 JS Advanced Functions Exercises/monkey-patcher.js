function moneyPatcher(command) {
    function getRating(thisObject) {
        let voteCount = thisObject.upvotes + thisObject.downvotes;
        let result = 'new';

        if (voteCount >= 10) {
            if (thisObject.upvotes / voteCount > 0.66) {
                result = 'hot';
            } else if (thisObject.upvotes - thisObject.downvotes >= 0 &&
                (thisObject.upvotes > 100 || thisObject.downvotes > 100)) {
                result = 'controversial';
            } else if (thisObject.upvotes - thisObject.downvotes < 0) {
                result = 'unpopular';
            }
        }
        return result;
    }

    let commandExecutor = {
        upvote: () => {
            this.upvotes++;
        },
        downvote: () => {
            this.downvotes++;
        },
        score: () => {
            let modifiedDownvotes = this.downvotes;
            let modifiedUpvotes = this.upvotes;
            let balance;
            if (modifiedDownvotes + modifiedUpvotes > 50) {
                let modifier = Math.max(modifiedDownvotes, modifiedUpvotes) * 0.25;
                modifiedUpvotes += modifier;
                modifiedDownvotes += modifier;
            }
            balance = modifiedUpvotes - modifiedDownvotes;
            return ([
                Math.ceil(modifiedUpvotes),
                Math.ceil(modifiedDownvotes),
                Math.ceil(balance),
                getRating(this)
            ]);
        },
    };

    return commandExecutor[command]();
}
