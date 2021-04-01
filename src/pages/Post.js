import Layout from '../components/Layout'
import post from '../api/post'

import styled from 'styled-components'
import htmr from 'htmr'
import day from 'dayjs'

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem 2.5rem;
  margin: 3.5rem auto;
  max-width: 1200px;
  width: 100%;
  font-size: 20px;

  .code-container {
    min-width: 0px;
    grid-column: 1 / -1;
    padding: 10px;
  }

  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 3fr 1fr;
    gap: 2.5rem 25px;
  }

  & > * {
    @media screen and (min-width: 768px) {
      grid-column: 2 / -2;
    }
  }
`

const Title = styled.div`
  grid-column: 1 / -1;
  font-size: 2em;
  font-weight: bold;
  text-align: center;

  @media screen and (max-width: 768px) {
    grid-column: 2 / -2;
  }
`

const Meta = styled.div`
  grid-column: 1 / -1;
  gap: 20px;
  text-align: center;
`

const Profile = styled.div`
  display: grid;
  grid-template-columns: 75px 1fr;
  grid-row: span 5 / auto;
  grid-column: 1 / span 1;
  gap: 20px;
  place-items: start;
  align-content: start;
  margin-bottom: 20px;

  .about {
    margin-top: 0;
  }

  .name {
    display: block;
  }

  .bio {
    font-size: 0.8rem;
  }

  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr;
  }

  @median screen and (max-width: 768px) {
    gap: 5px;
  }
`

const Cover = styled.div`
  grid-column: 1 / -1;

  img {
    max-width: 100%;
    width: 100%;
    height: auto;
  }
`

function Post (props) {
  const profile = {
    ...post.profile,
    url: `https://hackernoon.com/u/${post.profile.handle}`
  }

  return (
    <Layout>
      <Container>
        <Title as="h1">{post.title}</Title>

        <Meta>
          <div>{day.unix(post.publishedAt).format('MMMM D, YYYY')}</div>
        </Meta>

        <Cover>
          <img
            src={post.mainImage}
            alt="Article Banner"
            loading="lazy"
          />
        </Cover>

        <Profile>
          <a href={profile.url}>
            <img
              src={profile.avatar}
              alt={`${profile.handle} Hacker Noon Profile`}
              width="50"
              height="50"
              loading="lazy"
            />
          </a>

          <h3 className="about">
            <a href={profile.url}>@{profile.handle}</a>
            <small className="name">{profile.displayName}</small>
            <p className="bio">{profile.bio}</p>
          </h3>
        </Profile>

        {htmr(post.markup)}
      </Container>
    </Layout>
  )
}

export default Post
