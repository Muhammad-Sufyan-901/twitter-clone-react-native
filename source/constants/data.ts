import { faker } from "@faker-js/faker";
import { Tweet, TrendingTopic, TrendingVideo, HappeningNow, CalendarEvent, Notification } from "../types/data";

export const tweetList: Tweet[] = [...Array<Tweet>(20)].map((_: Tweet) => ({
  user: {
    name: faker.name.fullName(),
    username: faker.name.fullName().replace(/\s/g, "").toLowerCase(),
    profileImage: faker.image.avatar(),
    isVerified: faker.datatype.boolean(),
    isFollowing: faker.datatype.boolean(),
  },
  tweet: faker.helpers.arrayElement([faker.lorem.sentences(), faker.lorem.sentence()]),
  tweetImage: faker.helpers.maybe(
    () => faker.helpers.arrayElement([faker.image.abstract(680, 480, true), faker.image.animals(680, 480, true), faker.image.business(680, 480, true), faker.image.fashion(680, 480, true), faker.image.food(680, 480, true)]),
    { probability: 0.3 }
  ),
  replayed: faker.random.numeric(3),
  like: `${faker.random.numeric(3)}K`,
  retweet: `${faker.random.numeric(3)}K`,
  uploadedAt: `${faker.random.numeric()} ${faker.helpers.arrayElement(["h", "d"])}`,
}));

export const followingTweetList: Tweet[] = tweetList.filter(({ user: { isFollowing } }) => isFollowing === true);

export const trendingTopicList: TrendingTopic[] = [...Array<TrendingTopic>(5)].map((_: TrendingTopic) => ({
  category: faker.helpers.arrayElement(["Music", "Gaming", "Productivity", "Work Out", "Japanese", "Korean", "Viral"]),
  topic: faker.helpers.arrayElement([faker.random.words(3), faker.lorem.words(3)]),
  tweets: faker.random.numeric(3),
}));

export const trendingVideoList: TrendingVideo[] = [...Array<TrendingVideo>(5)].map((_: TrendingVideo) => ({
  video: faker.helpers.arrayElement([faker.image.nature(200, 300, true), faker.image.fashion(200, 300, true), faker.image.food(200, 300, true), faker.image.image(200, 300, true)]),
  views: faker.random.numeric(3),
}));

export const happeningNowList: HappeningNow[] = [...Array<HappeningNow>(3)].map((_: HappeningNow) => ({
  title: faker.random.words(10),
  description: faker.lorem.paragraph(),
  viewers: {
    viewerProfile: [...Array<string>(3)].map((_: string) => faker.image.avatar()),
    views: faker.random.numeric(2),
  },
  host: {
    profileImage: faker.image.avatar(),
    name: faker.name.fullName(),
  },
}));

export const calendarEventList: CalendarEvent[] = [...Array<CalendarEvent>(3)].map((_: CalendarEvent) => ({
  date: faker.date.soon(10, Date.now()),
  title: faker.random.words(10),
  description: faker.lorem.paragraph(),
  host: {
    profileImage: faker.image.avatar(),
    name: faker.name.fullName(),
  },
}));

export const allNotificationList: Notification[] = [...Array<Notification>(5)].map((_: Notification) => ({
  profileImage: faker.image.avatar(),
  name: faker.name.fullName(),
  tweet: faker.helpers.arrayElement([faker.lorem.sentences(), faker.lorem.sentence()]),
}));
