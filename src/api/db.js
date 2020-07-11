const users = [
  {
    id: 1,
    email: "phkim@ebay.com",
    name: "Philjae Kim",
    posts: posts.filter(post.author.id === 1)
  },
  {
    id: 2,
    email: "smpark@ebay.com",
    name: "Sungmin Park",
    posts: posts.filter(post.author.id === 2)
  }
]

const posts = [
  {
    id: 1,
    title: "GraphQL - Query Language for your API",
    content: "A GraphQL service is created by defining types and fields on those types, then providing functions for each field on each type.",
    publishedAt: "2020-04-16 07:00:00",
    author: users[0]
  },
  {
    id: 2,
    title: "How to build Elasticsearch API using GraphQL",
    content: "You can implement functions for each field using Elasticserch nodejs client.",
    publishedAt: "2020-07-01 00:00:00",
    author: users[0]
  },
  {
    id: 3,
    title: "How to build Data access GraphQL service",
    content: "Have you ever heard about Prisma. It is a database tool kit",
    publishedAt: "N/A",
    author: users[0]
  },
  {
    id: 4,
    title: "Trendy한 개발자가 되어보자 GraphQL by 김필재님",
    content: "GraphQL에 관심이 있는 분들과 직접 소규모 워크샵을 통해 하나 하나 익혀나가려고 합니다.",
    publishedAt: "2020-04-21 14:30:00",
    author: users[1]
  },
  {
    id: 5,
    title: "생초보 Java 코딩 입문 by 김성박님",
    content: "Java에 대해 아무것도 몰라도 시작 가능한 동영상 강의로 구성하여 모든 이들이 쉽게 자바 프로그래밍에 입문할 수 있도록 돕고 싶습니다!",
    publishedAt: "2020-04-21 14:30:00",
    author: users[1]
  },
  {
    id: 6,
    title: "Kaggle Grandmaster 성공기 by 김상훈님",
    content: "AI, Data Science, 머신러닝 종사자들의 꽃인 Kaggle에 대한 경험담을 공유하고 여러분들의 궁금증 모두 해결해드리겠습니다. ^^",
    publishedAt: "2020-04-21 14:30:00",
    author: users[1]
  }
]