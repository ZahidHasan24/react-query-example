import { useQuery } from "react-query";
import { Flex } from "rebass";
import { getAllBooks } from "../../service";
import Loader from "react-loader-spinner";
import Container from "../Shared/Container";
import BookItem from "../BookItem";

const BooksList = () => {
  const { data, error, isLoading, isError } = useQuery("books", getAllBooks);
  if (isLoading) {
    return (
      <Container>
        <Flex py="5" justifyContent="center">
          <Loader type="ThreeDots" color="#ccc" height={30} />
        </Flex>
      </Container>
    );
  }
  if (isError) {
    return <span>Error: {error.message}</span>;
  }
  return (
    <Container>
      <Flex flexDirection="column" alignItems="center">
        {data.map(({ author, title, id }) => (
          <BookItem author={author} title={title} key={id} id={id} />
        ))}
      </Flex>
    </Container>
  );
};
export default BooksList;
