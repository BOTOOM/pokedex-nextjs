export default async function BadgeType(typeName: any) {
  return (
    <span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400">
      {typeName.typeName}
    </span>
  );
}
