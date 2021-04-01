import Layout from '../components/Layout'
import post from '../api/post'

import htmr from 'htmr'
import styled from 'styled-components'

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
  // grid-template-columns: 1fr;
  grid-template-columns: 75px 1fr;
  grid-row: span 5 / auto;
  grid-column: 1 / span 1;
  gap: 20px;
  place-items: start;
  align-content: start;
  margin-bottom: 20px;

  .about {
    margin-top: 0
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

  // @media screen and (min-width: 768px) {
  //   grid-column: 2 / -2;
  // }

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

// const Content = styled.div`
//   // display: flex;
//   // flex-flow: row wrap;
//   // background: pink;
//   // width: 100%;
//   display: grid;
//   grid-template-columns: minmax(0, 1fr);
//   gap: 20px;
// `

function Post (props) {
  // TODO: Move to Profile component
  const { profile } = post
  const url = {
    profile: `https://hackernoon.com/u/${profile.handle}`
  }

  return (
    <Layout>
      <Container>
        <Title as="h1">{post.title}</Title>

        <Meta>
          <div>{post.createdAt}</div>
        </Meta>

        <Cover>
          <img
            src={post.mainImage}
            alt="Article Banner"
            loading="lazy"
          />
        </Cover>

        <Profile>
          <a href={url.profile}>
            <img
              src={profile.avatar}
              alt={`${profile.handle} Hacker Noon Profile`}
              width="50"
              height="50"
              loading="lazy"
            />
          </a>

          <h3 className="about">
            <a href={url.profile}>
              @{profile.handle}
            </a>
            <small className="name">{post.profile.displayName}</small>
            <p className="bio">{post.profile.bio}</p>
          </h3>
        </Profile>

        {htmr(post.markup)}
      </Container>
    </Layout>
  )
}

export default Post
