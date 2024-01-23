import App from '../../App';
import renderer from 'react-test-renderer';

it('App renders without crashing', () => {
  const rendered = renderer.create(<App />).toJSON();
  console.log('rendered: ', rendered)
  expect(rendered).toBeTruthy();
});

it('App test against snapshot', () => {
  const tree = renderer.create(<App />).toJSON();
  expect(tree).toMatchSnapshot();
});
