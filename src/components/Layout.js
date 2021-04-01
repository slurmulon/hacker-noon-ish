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

  // TOOD: Move to Content
  blockquote {
    grid-column: 1 / -1;
    font-size: 1.25rem;
    font-style: italic;
    margin-left: 0px;
    margin-right: 0px;
    padding: 2rem 0px;
    text-align: center;
  }
`

const Toolbar = styled.div`
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 10;
  background-color: ${props => props.theme.main};
  // background-color: rgb(0,255,0);
  // background-color: #b6ffb4;
  // background-color: rgba(0,50,0);
  // background-color: cyan;
  // background-color: orangered;
  // background-color: aquamarine;
  // background-color: #bfff6b;

  .logo, .links {
    padding: 1em;
  }

  .links {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.theme.bg2};
  }

  .links a {
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

  @media (max-width: 1280px) {
    // padding: 1rem 2rem;
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

        <div className="links">
          {links.map((link, index) =>
            <a key={index} href={link.url}>{link.name}</a>
          )}
        </div>
      </Toolbar>

      <Content>
        {props.children}
      </Content>

      <footer>
        Footer!
      </footer>
    </Skeleton>
  )
}

export default Layout
