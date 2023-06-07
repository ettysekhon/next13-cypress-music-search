import { MusicCard } from './MusicCard'

describe('<MusicCard />', () => {
  it('should render and display expected content', () => {
    const props = {
      trackId: '1',
      artworkUrl100: 'https://is4-ssl.mzstatic.com/image/thumb/Features4/v4/dc/ca/29/dcca295f-851e-5faf-a3b4-030965fa80f2/dj.jyrlgxlq.jpg/30x30bb.jpg',
      trackName: 'some track name',
      artistName: 'some artist',
      kind: 'song',
      collectionId: 'abc',
    };

    cy.mount(<MusicCard {...props} />);

    cy.get('h6').contains('some track name');
  });
});
