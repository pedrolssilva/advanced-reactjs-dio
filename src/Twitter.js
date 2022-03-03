import React, {useEffect, useState , memo} from 'react';

// shouldComponentUpdate
const areEqual = (prevProps, nextProps) => {
  return prevProps.loading === nextProps.loading
}

function Twitter(props) {
  const {loading} = props;
  const [tweet, setTweet] = useState('title'); 

  // componentDidMount
  useEffect(() => {
    const {posts, loading} = props;
    console.log('componentDidMount ', posts);
    console.log('componentDidMount: loading ', loading);
  }, [] )

  // componentDidUpdate
  useEffect(() => {
      console.log('componentDidUpdate: loading=', loading);
  },[loading])

  // componentWillUnmount
  useEffect(() => {
    return () => {
      console.log('componentWillUnmount: It was removed ;[')
    }
  },[])


  const handleTweet = () => {
    setTweet('tweet updated')
  }

  console.log('Tweet updated: ', tweet);

  return (
    <div>
      <button onClick={handleTweet}>Re render</button>
      tests
    </div>
  )
}

export default memo(Twitter, areEqual)