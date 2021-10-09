import CommentsLayout from "../layout/comments.layout";
import ReadArticleLayout from "../layout/read.article.layout";
import AuthorsOfTheMonth from "../layout/authorsMonth";
import BecomeAuthor from "../components/becomeauthor.component";
import TopicsLayout from "../layout/topics.layout";
import MoreArticlesLayout from "../layout/moreArticles.layout";

const ReadArticlePage = ({ page }) => (
  <>
    <ReadArticleLayout page={page} />
    <CommentsLayout />
    <MoreArticlesLayout length={10} />
    <TopicsLayout />
    <AuthorsOfTheMonth
      styles=".NewestAuthors{display : none}"
      title="Top elite authors"
    />
    <BecomeAuthor />
  </>
);

export default ReadArticlePage;
