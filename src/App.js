

function App() {
  return <div>
    <Folder name="Desktop">
      <Folder name="Music">
        <File name="all_star.mp4"/>
        <File name="express_file.mp4"/>
      </Folder>
      <File name="dogs.jpeg" />
      <File name="cats.png" />
    </Folder>
    <Folder name="Applications" />


  </div>
}

const Folder = (props) => {
  return <div>
    {props.name}
    <div style={{marginLeft : '17px'}}>
      {props.children}
    </div>
  </div>

};

const File = (props) => {
  return <div>{props.name}</div>
};

export default App;
