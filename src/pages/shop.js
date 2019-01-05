import React from 'react';
import Layout from '../components/layout/layout';

class BlogIndex extends React.Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <main>
          <section className="content-shop">
            <iframe
              title="Shop"
              width="100%"
              height="500px"
              src="https://squareup.com/market/texasrollergirls"
            />
          </section>
        </main>
      </Layout>
    );
  }
}

export default BlogIndex;
