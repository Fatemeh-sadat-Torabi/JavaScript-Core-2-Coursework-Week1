/*
create a blog post object which contains all data related to a blog post! 
these data are listed as below:
- title of post,
- body of post,
- author of post,
- number of views,
- number of likes,
- isLive (boolean)
- comments array (with two property: author , body, polarity)


you can use your own title and body for this blog post, write your name as author, fill other 
properties with your arbitrary values! Imagin comments are as below:

Jack  => this post was useful!Thanks.  => polarity: positive
Paul  => I liked this post, useful for me! => polarity: positive
William  => It wasn't useful! I already knew it. => polarity: Negative
Mike  => I don't like it. => polarity: Negative
Mary  => Fantastic! => polarity: positive

write a function that take a post as input, and prints how many positive polarity comments this post has!
write a function that take a post as input, and prints first and last comments!


*/

const blogPost = {
    title : 'Almost Every Thing in JS is an object! And Objects are Variables!',
    body : 'JavaScript Variables can contain single value, like let name = "Douglas", they can also contain many values like objects! object values are written as name:value pairs.',
    author : 'Joe',
    views : 67,
    likes : 40,
    isLive : true,
    comments : [
        {author:"Jack", body:"this post was useful!Thanks.",polarity:"positive"},
        {author:"Paul", body:"I liked this post, useful for me!",polarity:"positive"},
        {author:"William", body:"It wasn't useful! I already knew it.",polarity:"negative"},
        {author:"Mike",body:"I don't like it.",polarity:"negative"},
        {author:"Mary",body:"Fantastic!",polarity:"positive"},

    ],
};


function positiveComments(post){
    let positives = 0;
    post.comments.forEach((comment)=>{
    if(comment.polarity === "positive") positives = positives+1;
    })
    console.log("positive comments are "+ positives);
}

function firstLastComments(post){
    console.log(post.comments[0].body);
    let lastCommentIndex = post.comments.length - 1;
    console.log(post.comments[lastCommentIndex].body);
}

positiveComments(blogPost);
firstLastComments(blogPost);
