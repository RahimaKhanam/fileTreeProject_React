import { useState } from "react";


function App() {
  return <div>
    <Folder name="Desktop">
      <Folder name="MCA">
        <Folder name="Java">
          <File name="palindrome.java" />
          <File name="anagram.java" />
          <File name="reverse_string.java" />
          <File name="substring.mp4" />
        </Folder>
        <Folder name="Python">
          <File name="largest_element.py" />
          <File name="smallest_element.py" />
          <File name="wave_array.py" />
          <File name="rotate_array.py" />
        </Folder>
        <Folder name="SQL">
          <File name="emp.sql" />
          <File name="manager.sql" />
          <File name="customer.sql" />
        </Folder>
        <File name="syllabus.doc" />
        <File name="grade_card.doc" />
      </Folder>

      <Folder name="Books">
        <File name="Data Structures and ALgorithms.pdf" />
        <File name="Java_handbook.pdf" />
        <File name="Introduction to Python.pdf" />
        <File name="Web Development.pdf" />
        <File name="How to crack interviews.pdf" />
      </Folder>

      <Folder name="Movies">
        <File name="Joker.mkv" />
        <File name="The Lion King.mkv" />
        <File name="The Avengers- Endgame.mkv" />
        <File name="Up.mkv" />
        <File name="Inception.mkv" />
      </Folder>

      <Folder name="Music">
        <File name="Taki Taki.mp4" />
        <File name="Girls like you.mp4" />
        <File name="Memories.mp4" />
      </Folder>

      <Folder name="Images">
        <File name="Rahima.png" />
        <File name="Sarah.png" />
        <File name="Sana.png" />
        <File name="Tarannum.png" />
        <File name="Ayesha.png" />
        <File name="Us.png" />
      </Folder>

    </Folder>
    <Folder name="Applications">
      <File name="Adobe Xd.app" />
      <File name="VS Code.app" />
      <File name="Android Studio.app" />
      <File name="MS Word.app" />
      <File name="MS Powerpoint.app" />
    </Folder>


  </div>
}

const Folder = (props) => {
  const [isOpen, setIsOpen] = useState(true);
  const { name, children } = props;
  const direction = isOpen ? 'down' : 'right';

  const handleClick = () => setIsOpen(!isOpen);

  return <div>
    <span onClick={handleClick}>
      <i className="blue folder icon"></i>
      <i className={`caret ${direction} icon`}></i>
    </span>
    {name}
    <div style={{ marginLeft: '17px' }}>
      {isOpen ? children : null}
    </div>
  </div>

};

const File = (props) => {
  const { name } = props;
  const fileExtention = name.split('.')[1];
  const fileIcons = {
    mp4: 'headphones',
    png: 'file image',
    java: 'file code',
    py: 'file code',
    sql: 'table',
    doc: 'file alternate outline',
    pdf: 'file pdf',
    app: 'file',
    mkv: 'file video',
  }
  return <div>
    <i className={`${fileIcons[fileExtention]} icon`}></i>
    {name}
  </div>
};

export default App;
