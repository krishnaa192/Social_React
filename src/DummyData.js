export const Users = [
    {
      id:1,
      profilePicture: "assets/person/profile.jpg",
      username: "Krishna Upadhyay",
    },
    {
      id:2,
      profilePicture: "assets/person/p0.jpg",
      username: "Nikky Yadav",
    },
    {
      id:3,
      profilePicture: "assets/person/profile.jpg",
      username: "Kishan V",
    },
    {
      id:4,
      profilePicture: "assets/person/p1.jpg",
      username: "Rishabh Pandey",
    },
    {
      id:5,
      profilePicture: "assets/person/p0.jpg",
      username: "Aarav Pandey",
    },
    {
      id:6,
      profilePicture: "assets/person/p3.jpg",
      username: "Aarvi Tiwari",
    },
    {
      id:7,
      profilePicture: "assets/person/p4.jpg",
      username: "Ashirwad Upadhyay",
    },
    {
      id:8,
      profilePicture: "assets/person/p5.jpg",
      username: "Nikil Singh",
    },
    {
      id:9,
      profilePicture: "assets/person/p6.jpg",
      username: "Siraj Khan",
    },
    {
      id:10,
      profilePicture: "assets/person/p0.jpeg",
      username: "Rahul Singh",
    },
  ];
  
  export const Posts = [
    {
      id: 1,
      desc: "Love For All, Hatred For None.",
      photo: "assets/post/1.jpg",
      date: "5 mins ago",
      userId: 1,
      like: 32,
      comment: 9,
    },
    {
      id: 2,
      desc: "Love For All, Hatred For None.",
      photo: "assets/post/3.jpg",
      date: "15 mins ago",
      userId: 2,
      like: 2,
      comment: 1,
    },
    {
      id: 3,
      desc: "Every moment is a fresh beginning.",
      photo: "assets/post/0.png",
      date: "1 hour ago",
      userId: 3,
      like: 61,
      comment: 2,
    },
    {
      id: 4,
      desc: "Love For All, Hatred For None.",
      photo: "assets/post/2.jpg",
      date: "4 hours ago",
      userId: 4,
      like: 7,
      comment: 3,
    },
    {
      id: 5,
      desc: "Love For All, Hatred For None.",
      photo:"assets/post/4.jpg",
      date: "5 hours ago",
      userId: 5,
      like: 23,
      comment: 5,
    },
    {
      id: 6,
      desc: "Love For All, Hatred For None.",
      photo:"assets/post/5.jpg",
      date: "1 day ago",
      userId: 6,
      like: 44,
      comment: 6,
    },
    {
      id: 7,
      desc: "Never regret anything that made you smile.",
      photo: "assets/post/8.jpg",
      date: "2 days ago",
      userId: 7,
      like: 52,
      comment: 3,
    },
    {
      id: 8,
      desc: "Love For All, Hatred For None.",
      photo: "assets/post/6.jpg",
      date: "3 days ago",
      userId: 8,
      like: 15,
      comment: 1,
    },
    {
      id: 9,
      desc: "Change the world by being yourself.",
      photo: "assets/post/7.jpg",
      date: "5 days ago",
      userId: 9,
      like: 11,
      comment: 2,
    },
    
  ];

  export const TextPosts = [
    {
      id: 1,
      desc: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      date: "5 mins ago",
      userId: 1,
      like: 32,
      comment: 9,
    },
    
    {
      id: 2,
      desc: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      date: "1 week ago",
      userId: 2,
      like: 4,
      comment: 12,
    },
  ];
  export const dummyComments = [
    {
      id: 1,
      postId: 101,
      userId: 3,
      username: 'john_doe',
      text: 'This is a great post!',
      replies: [
        {
          id: 101,
          userId: 2,
          username: 'alice_smith',
          text: 'Agreed! I learned a lot from this.',
        },
      ],
    },
    {
      id: 2,
      postId: 4,
      userId:2,
      username: 'alice_smith',
      text: 'Nice work! Keep it up!',
    },
    {
      id: 3,
      postId: 102,
      userId: 5,
      username: 'bob_jenkins',
      text: 'I love the content. Very informative.',
      replies: [
        {
          id: 102,
          userId: 204,
          username: 'emma_jones',
          text: 'Absolutely! Your posts are always insightful.',
        },
      ],
    },
    {
      id: 4,
      postId: 102,
      userId: 6,
      username: 'emma_jones',
      text: 'Amazing post! Looking forward to more.',
    },
    // Add more comments and replies as needed
  ];
  