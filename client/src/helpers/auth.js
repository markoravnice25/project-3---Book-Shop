
export const getTokenFromLocalStorage = () => {
  return window.localStorage.getItem('project-3-waterstones')
}

export const getPayload = () => {
  const token = getTokenFromLocalStorage()
  
  if (!token) return

  const payload = token.split('.')[1]
  
  console.log(JSON.parse(atob(payload)))
  return JSON.parse(atob(payload))
}

// ? function that checks that user is authenticated
export const userIsAuthenticated = () => {
 
  const payload = getPayload()

  if (!payload) return false
 
  const currentTime = Math.floor(Date.now() / 1000)


  return currentTime < payload.exp
}

// ? This function will check the user id from the payload matches the review user id
export const userIsOwner = (reviews) => {
  // get payload and check it has a value
  const payload = getPayload()
  if (!payload) return
  return reviews.addedBy._id === payload.sub
}