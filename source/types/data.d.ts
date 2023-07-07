export class Tweet {
  user: User;
  tweet: string;
  tweetImage: string | undefined;
  like: string;
  retweet: string;
  replayed: string;
  uploadedAt: string;
}

export class User {
  username: string;
  name: string;
  profileImage: string;
  isVerified: boolean;
  isFollowing: boolean;
}

export class TrendingTopic {
  category: string;
  topic: string;
  tweets: string;
}

export class TrendingVideo {
  video: string;
  views: string;
}

export class HappeningNow {
  title: string;
  viewers: Viewers;
  description: string;
  host: Host;
}

export class CalendarEvent {
  date: Date;
  title: string;
  host: Host;
  description: string;
}

export class Viewers {
  viewerProfile: string[];
  views: string;
}

export class Host {
  profileImage: string;
  name: string;
}

export class Notification {
  profileImage: string;
  name: string;
  tweet: string;
}
