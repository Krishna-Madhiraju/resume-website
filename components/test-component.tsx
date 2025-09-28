export function TestComponent() {
  return (
    <div className="p-4 bg-primary text-primary-foreground rounded-lg">
      <p>Test component - if you can see this styled correctly, the CSS system is working.</p>
      <p className="text-sm mt-2">Current time: {new Date().toLocaleTimeString()}</p>
    </div>
  )
}
