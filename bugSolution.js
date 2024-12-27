The solution uses optional chaining to safely access `data.name` only if `data` is not null:

```javascript
// Corrected component
function MyComponent() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('some-api-endpoint')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  return (
    <View>
      <Text>{data?.name}</Text> {/* Safe access using optional chaining */}
    </View>
  );
}
```

Alternatively, conditional rendering can be used:

```javascript
// Corrected component using conditional rendering
function MyComponent() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('some-api-endpoint')
      .then(response => response.json())
      .then(data => {
        setData(data);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  return (
    <View>
      <Text>{data.name}</Text>
    </View>
  );
}
```