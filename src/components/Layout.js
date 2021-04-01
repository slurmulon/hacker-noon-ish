import styled from 'styled-components'

const Skeleton = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  width: 100%;
  color: ${props => props.theme.fg};
  background-color: ${props => props.theme.bg};

  a {
    color: ${props => props.theme.fg};
    text-decoration: ${props => 'wavy underline ' + props.theme.main};
  }
`

const Toolbar = styled.div`
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 10;
  background-color: ${props => props.theme.main};
`

const Links = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1em;
  background-color: ${props => props.theme.bg2};

  a {
    text-decoration: none;
    color: limegreen;
    font-family: 'IBM Plex Mono', monospace;
    margin: 0 2em;
  }
}`

const Content = styled.main`
  display: flex;
  justify: center;
  align-items: start;
  font-family: 'IBM Plex Sans', sans-serif;

  blockquote {
    grid-column: 1 / -1;
    font-size: 1.25rem;
    font-style: italic;
    margin-left: 0px;
    margin-right: 0px;
    padding: 2rem 0px;
    text-align: center;
  }

  @media (max-width: 1280px) {
    padding: 1rem;
  }
`

const links = [
  { name: 'Read', url: 'https://hackernoon.com/tagged' },
  { name: 'Top Stories', url: 'https://hackernoon.com/tagged/hackernoon-top-story' },
  { name: 'Write', url: 'https://hackernoon.com/tagged/hackernoon-top-story' },
  { name: 'Listen', url: 'https://hackernoon.com/tagged/hackernoon-podcast' },
]

function Layout (props) {
  return (
    <Skeleton>
      <Toolbar as="nav">
        <img
          src="https://hackernoon.com/hn-logo.png"
          alt="Hackernoon Logo"
          width="248"
          height="40"
          loading="lazy"
          className="logo"
        />

        <Links>
          {links.map((link, index) =>
            <a key={index} href={link.url}>{link.name}</a>
          )}
        </Links>
      </Toolbar>

      <Content>
        {props.children}
      </Content>

      <footer>
        {/* TODO */}
      </footer>
    </Skeleton>
  )
}

export default Layout
