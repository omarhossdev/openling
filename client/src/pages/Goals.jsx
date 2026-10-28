import { useState } from "preact/hooks";

export default function Goals() {
  const goals = [
    { id: 1, value: "education", text: "دراسة" },
    { id: 2, value: "travel", text: "سفر" },
    { id: 3, value: "work", text: "عمل"},
    { id: 4, value: "friendships", text: "تكوين صداقات" },
    { id: 5, value: "fluency", text: "احترافية" },
    { id: 6, value: "hobby", text: "هواية" }
  ]

  const [selected, setSelected] = useState([])

  const handleChange = (e) => {
    const { value, checked } = e.target;

    setSelected(prev =>
      checked ? [...prev, value] // add
      : prev.filter(v => v !== value) // remove  
    )
  }

  return (
    <>
      <h1>لماذا تريد تعلم الانجليزية؟</h1>

      <form>
        {goals.map(goal => (
          <label key={goal.id}>
            <input
              type="checkbox"
              value={goal.value}
              checked={selected.includes(goal.value)} // 🔗 link state
              onChange={handleChange}
            />
            {goal.text}
          </label>
        ))}
      </form>

      <p>Selected: {selected.join(', ')} 👀</p>
    </>
  )
}