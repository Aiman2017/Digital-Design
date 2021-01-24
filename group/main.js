var model = [
  {
    id: 0,
    title: "Title text 1",
    text: "Some text 1",
    user: {
      id: 0,
      name: "user 1",
    },
  },
  {
    id: 1,
    title: "Title text 2",
    text: "Some text 2",
    user: {
      id: 1,
      name: "user 2",
    },
  },
  {
    id: 2,
    title: "Title text 3",
    text: "Some text 3",
    user: {
      id: 0,
      name: "user 1",
    },
  },
  {
    id: 3,
    title: "Title text 4",
    text: "Some text 4",
    user: {
      id: 2,
      name: "user 3",
    },
  },
  {
    id: 4,
    title: "Title text 5",
    text: "Some text 5",
    user: {
      id: 0,
      name: "user 1",
    },
  },
];

let itemPosts = [];

let groupBy = model.reduce((groups, post) => {
  let id = post.user.id;
  if (!itemPosts[id]) {
    itemPosts[id] = {
      id: post.user.id,
      name: post.user.name,
      posts: [],
    };
  }
  itemPosts[id].posts.push({
    id: post.id,
    title: post.title,
    text: post.text,
  });

  return groups;
}, {});

console.log(itemPosts);
