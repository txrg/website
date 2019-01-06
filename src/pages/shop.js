import React from 'react';
import Layout from '../components/layout/layout';

class BlogIndex extends React.Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <main className="shop">
          <section className="content-shop">
            <div className="iframe-shop--wrapper">
              <iframe
                className="iframe-shop"
                title="Shop"
                src="https://squareup.com/market/texasrollergirls"
              />
            </div>
          </section>
        </main>
      </Layout>
    );
  }
}

export default BlogIndex;
