import { useCallback, useEffect, useState } from 'react';
import { Button, Col, Container, Form, Row, Table } from 'react-bootstrap';
import { Error } from '../../App';
import { Alert } from '../../component/Alert';
import { Users, UserService } from '../../services/index';

export const SearchList = () => {
  const [users, setUsers] = useState<Users>([]);
  const [searchInputValue, setSearchInputValue] = useState('');
  const [error, setShowError] = useState<Error>({ show: false, message: '' });

  const searchUsers = useCallback(async (search?: string) => {
    try {
      const users: Users = await UserService.findUsers(search);
      setUsers(users);
    } catch (e: any) {
      const message = e?.response?.data?.message ? e?.response?.data?.message : e.message;
      setShowError({ show: true, message });
    }
  }, []);

  const onSearchClick = useCallback(
    (e: any) => {
      e.preventDefault();
      searchUsers(searchInputValue);
    },
    [searchInputValue, searchUsers],
  );

  useEffect(() => {
    searchUsers();
  }, [searchUsers]);
  return (
    <Container fluid>
      <Alert heading={error.message} show={error.show} onClose={() => setShowError({ show: false, message: '' })} />
      <Form onSubmit={onSearchClick}>
        <Row>
          <Col md={12} className="d-flex justify-content-end mb-2">
            <Col md={10}>
              <Form.Group>
                <Form.Control
                  name="name"
                  type="text"
                  placeholder="Search"
                  value={searchInputValue}
                  onChange={e => setSearchInputValue(e.target.value)}
                />
              </Form.Group>
            </Col>
            <Col md={2}>
              <Button data-test-id="search-btn" onClick={onSearchClick}>
                Search
              </Button>
            </Col>
          </Col>
        </Row>
      </Form>
      <Table data-test-id="user-table" striped bordered hover responsive>
        <thead>
          <tr>
            <th>Fullname</th>
            <th>Email</th>
            <th>City</th>
            <th>Country</th>
            <th>Street Address</th>
          </tr>
        </thead>
        <tbody>
          {users?.map(({ id, fullname, email, address }) => {
            return (
              <tr key={id} data-test-id="row">
                <td>{fullname}</td>
                <td>{email}</td>
                <td>{address?.city}</td>
                <td>{address?.country}</td>
                <td>{address?.streetAddress}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Container>
  );
};
