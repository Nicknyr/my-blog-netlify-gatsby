import React from 'react'
import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper'
import Layout from '../../components/Layout'
import BlogRoll from '../../components/BlogRoll'

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div
          className="full-width-image-container margin-top-0"
          style={{
            backgroundImage: `url('/img/blog-index.jpg')`,
          }}
        >
          <Button color="primary" variant="contained">A button!</Button>
          <Button color="secondary" variant="contained">A button!</Button>
          <Paper color="secondary"><h1>Example H1 Header</h1></Paper>
        </div>
        <section className="section">
          <div className="container">
            <div className="content">
              <BlogRoll />
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
