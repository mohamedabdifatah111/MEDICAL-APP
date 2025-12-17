interface StatCardProps {
  title: string;
  value: string | number;
  icon: string;
  trend?: string;
  trendValue?: string;
}

export default function StatCard({
  title,
  value,
  icon,
  trend,
  trendValue,
}: StatCardProps) {
  return (
    <div className="medical-card">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-600 mb-1">{title}</p>
          <p className="text-3xl font-bold text-gray-900">{value}</p>
          {trend && trendValue && (
            <p className={`text-sm mt-2 ${trend === "up" ? "text-green-600" : "text-red-600"}`}>
              {trend === "up" ? "↑" : "↓"} {trendValue}
            </p>
          )}
        </div>
        <div className="text-4xl">{icon}</div>
      </div>
    </div>
  );
}

