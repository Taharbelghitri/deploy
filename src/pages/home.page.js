import HomeLayout from "../layout/home.layout";
import AuthorsOfTheMonth from "../layout/authorsMonth";
import LatestArticlesLayout from "../layout/latestArticles.layout";
import TopViewdArticles from "../layout/topViewdArticles.layout";
import TopicsLayout from "../layout/topics.layout";
import BecomeAuthorLayout from "../layout/becaumeAnAuthor.layout";
import MoreArticlesLayout from "../layout/moreArticles.layout";
import SecondArticleLayout from "../layout/article2.layout";

const FirstStyle = ({ style = 1 }) => (
  <>
    <HomeLayout style={style} />
    <AuthorsOfTheMonth />
    <LatestArticlesLayout />
    <TopViewdArticles />
    <TopicsLayout />
    <BecomeAuthorLayout />
    <MoreArticlesLayout />
    <SecondArticleLayout />
  </>
);
export default FirstStyle;
