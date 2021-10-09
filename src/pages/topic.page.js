import BecomeAuthor from "../components/becomeauthor.component";
import AuthorsOfTheMonth from "../layout/authorsMonth";
import MoreArticlesLayout from "../layout/moreArticles.layout";
import TopicHomeLayout from "../layout/topic.home.layou";
import TopicsLayout from "../layout/topics.layout";

export const TopicPage = () => (
  <>
    <TopicHomeLayout />
    <div style={{ height: "5vw" }} />
    <MoreArticlesLayout length={10} />
    <TopicsLayout />
    <AuthorsOfTheMonth
      styles=".NewestAuthors{display : none}"
      title="Top elite authors"
    />
    <BecomeAuthor />
  </>
);
