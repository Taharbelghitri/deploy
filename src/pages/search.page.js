import SearchLayout from "../layout/search.layout";
import MoreArticlesLayout from "../layout/moreArticles.layout";
import TopicsLayout from "../layout/topics.layout";
import AuthorsOfTheMonth from "../layout/authorsMonth";
import BecomeAuthor from "../components/becomeauthor.component";

const SearchPage = () => (
  <>
    <SearchLayout />
    <MoreArticlesLayout length={10} />
    <TopicsLayout />
    <AuthorsOfTheMonth
      styles=" margin-top : 0vw; .NewestAuthors{display : none}  "
      title="Top elite authors"
    />
    <BecomeAuthor />
  </>
);

export default SearchPage;
