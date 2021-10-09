import AuthorHomeLayout2 from "../layout/author.home.2.layout";
import AuthorHomeLayout from "../layout/author.home.layout";
import MoreArticlesLayout from "../layout/moreArticles.layout";
import TopicsLayout from "../layout/topics.layout";
import AuthorsOfTheMonth from "../layout/authorsMonth";
import BecomeAuthor from "../components/becomeauthor.component";

const AuthorPage = ({ page }) => (
  <>
    {page === 0 ? <AuthorHomeLayout /> : <AuthorHomeLayout2 />}
    <div style={{ height: "5vw" }} />
    <MoreArticlesLayout length={10} title="tahar belghitri articles" />
    <TopicsLayout />
    <AuthorsOfTheMonth
      styles=".NewestAuthors{display : none}"
      title="Top elite authors"
    />
    <BecomeAuthor />
  </>
);

export default AuthorPage;
