import React from 'react'
import UserPeople from './UserPeople'
import TitleHolder from './TitleHolder'

const MyGroup = () => {
  return (
    <div className="groupholder">
      <TitleHolder title="My Group" />
      <UserPeople/>
      <UserPeople/>
      <UserPeople/>
      <UserPeople/>
      <UserPeople/>
      <UserPeople/>
      <UserPeople/>
      <UserPeople/>
      <UserPeople/>
      <UserPeople/>
    </div>
  )
}

export default MyGroup