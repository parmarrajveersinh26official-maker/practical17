export default function StudentCard({ student }) {
  return (
    <div className="rounded-lg border bg-white p-4 shadow-sm">
      <h2 className="font-bold">{student.name}</h2>
      <p className="text-gray-600">{student.email}</p>
      <p className="text-sm text-blue-600">{student.company.name}</p>
    </div>
  );
}