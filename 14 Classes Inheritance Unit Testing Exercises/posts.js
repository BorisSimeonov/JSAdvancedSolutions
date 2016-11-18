function getPostClasses() {
    class Post {
        constructor(title, content) {
            this.title = title;
            this.content = content;
        }

        toString() {
            return `Post: ${ this.title }\nContent: ${ this.content }`;
        }
    }

    class SocialMediaPost extends Post {
        constructor(title, content, likes, dislikes) {
            if(typeof likes !== "number" ||
            typeof dislikes !== "number") {
                throw new TypeError("Like and dislike properties should me numbers");
            }
            super(title, content);
            this.likes = likes;
            this.dislikes = dislikes;
            this.comments = [];
        }

        addComment(...newCommentText) {
            for(let comment of newCommentText) {
                if(typeof comment === "string") {
                    this.comments.push(comment);
                }
            }
        }

        toString() {
            let result = super.toString();
            result += `\nRating: ${ this.likes - this.dislikes }`;
            if (this.comments.length) {
                result += `\nComments:`;
                this.comments.forEach((comment) => {
                    result += `\n * ${ comment }`;
                });
            }
            return result;
        }
    }

    class BlogPost extends Post {
        constructor(title, content, views) {
            super(title, content);
            if(typeof views !== "number") {
                views = 0;
            }
            this.views = views;
        }

        view() {
            ++this.views;
            return this;
        }

        toString() {
            return super.toString() +
                `\nViews: ${ this.views }`;
        }
    }

    return {
        Post: Post,
        SocialMediaPost : SocialMediaPost,
        BlogPost : BlogPost
    }
}

let postClasses = getPostClasses();
let post = new postClasses.Post("Post", "Content");

console.log(post.toString());
console.log();
let scm = new postClasses.SocialMediaPost("TestTitle", "TestContent", 25, 30);
scm.addComment("Good post");
scm.addComment("Very good post");
scm.addComment("Wow!");
console.log(scm.toString());
console.log();
let blog = new postClasses.BlogPost("BlogPostTitle", "PostContent", 0);
blog.view()
    .view()
    .view()
    .view();
console.log(blog.toString());
