import React from 'react'
import { dummyUserData } from '../assets/assets'
import { useState } from 'react'
import { Pencil } from 'lucide-react'


const ProfileModal = ({setShowEdit}) => {
  const user = dummyUserData;
  const [editForm, setEditForm] = useState({
    username: user.username,
    bio: user.bio,
    location: user.location,
    profile_picture: null,
    cover_photo: null,
    full_name: user.full_name,
  });
  const handleSaveProfile = async (e) => {
    e.preventDefault();
  };
  return (
  <div className="fixed inset-0 z-110 h-screen overflow-y-scroll bg-primary-90 backdrop-blur-md">
      <div className="max-w-2xl px-4 sm:px-0 py-10 mx-auto">
        <div className="card p-6 sm:p-10 border border-white/10">
          <h1 className="text-3xl font-bold text-default mb-6">
            Edit Profile
          </h1>
          <form className="space-y-4" onSubmit={handleSaveProfile}>
            {/* Profile Picture */}
            <div className="flex flex-col item-start gap-3">
              <label
                htmlFor="profile_picture"
                className="block text-sm font-semibold text-default/80 mb-2 uppercase tracking-[0.4em]"
              >
                Profile Picture
                <input
                  hidden
                  type="file"
                  accept="image/*"
                  id="profile_picture"
                  className="w-full"
                  onChange={(e) =>
                    setEditForm({
                      ...editForm,
                      profile_picture: e.target.files[0],
                    })
                  }
                />
                <div className="group/profile relative">
                  <img
                    src={
                      editForm.profile_picture
                        ? URL.createObjectURL(editForm.profile_picture)
                        : user.profile_picture
                    }
                    alt=""
                    className="w-24 h-24 rounded-full object-cover mt-2 border border-white/15 shadow-lg"
                  />
                  <div className="absolute hidden group-hover/profile:flex inset-0 bg-primary-50 rounded-full items-center justify-center">
                    <Pencil className="w-5 h-5 text-app drop-shadow" />
                  </div>
                </div>
              </label>
            </div>
            <div className="flex flex-col items-start gap-3">
              <label
                htmlFor="cover_photo"
                className="block text-sm font-semibold text-default/80 mb-2 uppercase tracking-[0.4em]"
              >
                Cover Photo
                <input
                  hidden
                  type="file"
                  accept="image/*"
                  id="cover_photo"
                  className="w-full"
                  onChange={(e) =>
                    setEditForm({ ...editForm, cover_photo: e.target.files[0] })
                  }
                />
                <div className="group/cover relative">
                  <img
                    src={
                      editForm.cover_photo
                        ? URL.createObjectURL(editForm.cover_photo)
                        : user.cover_photo
                    }
                    alt=""
                    className="w-full h-48 rounded-2xl bg-muted object-cover mt-2 border border-white/15"
                  />
                  <div className="absolute hidden group-hover/cover:flex inset-0 bg-primary-50 rounded-2xl items-center justify-center">
                    <Pencil className="w-6 h-6 text-app drop-shadow" />
                  </div>
                </div>
              </label>
            </div>
            <div>
              <label className="block text-sm font-semibold text-default/80 mb-2 uppercase tracking-[0.4em]">
                Name
              </label>
              <input
                type="text"
                className="w-full p-3.5 border border-white/15 rounded-2xl bg-white/5 text-default focus:outline-none focus:ring-2 focus:ring-indigo-500/60"
                placeholder="Please enter your full name"
                onChange={(e) =>
                  setEditForm({ ...editForm, full_name: e.target.value })
                }
                value={editForm.full_name}
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-default/80 mb-2 uppercase tracking-[0.4em]">
                Username
              </label>
              <input
                type="text"
                className="w-full p-3.5 border border-white/15 rounded-2xl bg-white/5 text-default focus:outline-none focus:ring-2 focus:ring-indigo-500/60"
                placeholder="Please enter your username"
                onChange={(e) =>
                  setEditForm({ ...editForm, username: e.target.value })
                }
                value={editForm.username}
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-default/80 mb-2 uppercase tracking-[0.4em]">
                Bio
              </label>
              <input
                type="text"
                className="w-full p-3.5 border border-white/15 rounded-2xl bg-white/5 text-default focus:outline-none focus:ring-2 focus:ring-indigo-500/60"
                placeholder="Please enter your bio"
                onChange={(e) =>
                  setEditForm({ ...editForm, bio: e.target.value })
                }
                value={editForm.bio}
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-default/80 mb-2 uppercase tracking-[0.4em]">
                Location
              </label>
              <input
                type="text"
                className="w-full p-3.5 border border-white/15 rounded-2xl bg-white/5 text-default focus:outline-none focus:ring-2 focus:ring-indigo-500/60"
                placeholder="Please enter your location"
                onChange={(e) =>
                  setEditForm({ ...editForm, location: e.target.value })
                }
                value={editForm.location}
              />
            </div>
            <div className='flex justify-end gap-3 pt-8'>
<button onClick={()=>{setShowEdit(false)} } type='button' className='px-5 py-2.5 btn-secondary rounded-xl hover:opacity-95 transition-colors'>Cancel</button>
<button type='submit' className='px-5 py-2.5 btn-primary text-app rounded-xl hover:opacity-95 transition cursor-pointer'>Save Changes</button>
</div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProfileModal
