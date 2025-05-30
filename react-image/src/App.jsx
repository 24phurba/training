import "./App.css";

const student = [
  {
    studentId: 1,
    name: "Tom",
    age: 20,
    imageUrl:
      "https://th.bing.com/th/id/R.fb3f5610d7fc5f24bf5e9abc5860a87f?rik=RIB6%2bz1lkiA7tw&riu=http%3a%2f%2fgetdrawings.com%2fcliparts%2ftom-and-jerry-clipart-12.png&ehk=Pl8O1dxO601m33%2f%2bTcRbwsLi58ozFWhXogloiqZ9puU%3d&risl=&pid=ImgRaw&r=0",
  },
  {
    studentId: 2,
    name: "Jerry",
    age: 19,
    imageUrl:
      "https://th.bing.com/th/id/R.f619f7a9ee75961587f9f4b15859932c?rik=fOu26EN5MHRyJw&riu=http%3a%2f%2fpurepng.com%2fpublic%2fuploads%2flarge%2fpurepng.com-tom-and-jerrytom-and-jerrytomjerryanimated-seriesin-1940characters-17015286595981qkzu.png&ehk=EONOoeb6rYSzWRzakX7tg%2bifAT3vt0M%2fS6pbCKev0EM%3d&risl=&pid=ImgRaw&r=0",
  },
];

const InfoCard = ({ imageUrl, name, age }) => {
  return (
    <div className="flex">
      <img src={imageUrl} />
      <div className="bio">
        <h3>{name}</h3>
        <p>{age}</p>
      </div>
    </div>
  );
};

function App() {
  return (
    <div>
      {student.map((student) => {
        return (
          <InfoCard
            key={student.studentId}
            name={student.name}
            age={student.age}
            imageUrl={student.imageUrl}
          />
        );
      })}
    </div>
  );
}
export default App;
