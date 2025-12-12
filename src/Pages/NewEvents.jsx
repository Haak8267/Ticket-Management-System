// // // import React, { useState } from 'react';
// // // import { Calendar, MapPin, DollarSign, Upload, X, Plus } from 'lucide-react';

// // // export default function NewEvents() {
// // //   const [loading, setLoading] = useState(false);
// // //   const [uploading, setUploading] = useState(false);

// // //   const [formData, setFormData] = useState({
// // //     name: '',
// // //     eventType: '',
// // //     address: '',
// // //     ticket: '',
// // //     checkIn: '',
// // //     amenities: [],
// // //     images: [],
// // //     isAvailable: true
// // //   });

// // //   const [imageFiles, setImageFiles] = useState([]);
// // //   const [imagePreviews, setImagePreviews] = useState([]);
// // //   const [newAmenity, setNewAmenity] = useState('');

// // //   const eventTypes = [
// // //     'Conference',
// // //     'Concert',
// // //     'Workshop',
// // //     'Festival',
// // //     'Sports',
// // //     'Theater',
// // //     'Networking',
// // //     'Exhibition',
// // //     'Seminar',
// // //     'Party',
// // //     'Other'
// // //   ];

// // //   const commonAmenities = [
// // //     'WiFi',
// // //     'Parking',
// // //     'Food & Drinks',
// // //     'AC',
// // //     'Wheelchair Access',
// // //     'Photography',
// // //     'Security',
// // //     'Restrooms',
// // //     'Stage',
// // //     'Sound System'
// // //   ];

// // //   const handleChange = (field, value) => {
// // //     setFormData({
// // //       ...formData,
// // //       [field]: value
// // //     });
// // //   };

// // //   const handleImageSelect = (e) => {
// // //     const files = Array.from(e.target.files);
    
// // //     if (imageFiles.length + files.length > 5) {
// // //       toast.error('Maximum 5 images allowed');
// // //       return;
// // //     }

// // //     setImageFiles([...imageFiles, ...files]);

// // //     // Create preview URLs
// // //     const newPreviews = files.map(file => URL.createObjectURL(file));
// // //     setImagePreviews([...imagePreviews, ...newPreviews]);
// // //   };

// // //   const removeImage = (index) => {
// // //     const newFiles = imageFiles.filter((_, i) => i !== index);
// // //     const newPreviews = imagePreviews.filter((_, i) => i !== index);
    
// // //     // Revoke the URL to avoid memory leaks
// // //     URL.revokeObjectURL(imagePreviews[index]);
    
// // //     setImageFiles(newFiles);
// // //     setImagePreviews(newPreviews);
// // //   };

// // //   const uploadImages = async () => {
// // //     const uploadedUrls = [];
    
// // //     for (let i = 0; i < imageFiles.length; i++) {
// // //       const file = imageFiles[i];
// // //       const storageRef = ref(storage, `events/${currentUser.uid}/${Date.now()}_${file.name}`);
      
// // //       try {
// // //         await uploadBytes(storageRef, file);
// // //         const url = await getDownloadURL(storageRef);
// // //         uploadedUrls.push(url);
// // //       } catch (error) {
// // //         console.error('Error uploading image:', error);
// // //         throw error;
// // //       }
// // //     }
    
// // //     return uploadedUrls;
// // //   };

// // //   const toggleAmenity = (amenity) => {
// // //     if (formData.amenities.includes(amenity)) {
// // //       setFormData({
// // //         ...formData,
// // //         amenities: formData.amenities.filter(a => a !== amenity)
// // //       });
// // //     } else {
// // //       setFormData({
// // //         ...formData,
// // //         amenities: [...formData.amenities, amenity]
// // //       });
// // //     }
// // //   };

// // //   const addCustomAmenity = () => {
// // //     if (newAmenity.trim() && !formData.amenities.includes(newAmenity.trim())) {
// // //       setFormData({
// // //         ...formData,
// // //         amenities: [...formData.amenities, newAmenity.trim()]
// // //       });
// // //       setNewAmenity('');
// // //     }
// // //   };

// // //   const validateForm = () => {
// // //     if (!formData.name.trim()) {
// // //       alert('Please enter event name');
// // //       return false;
// // //     }
// // //     if (!formData.eventType) {
// // //       alert('Please select event type');
// // //       return false;
// // //     }
// // //     if (!formData.address.trim()) {
// // //       alert('Please enter event address');
// // //       return false;
// // //     }
// // //     if (!formData.ticket || formData.ticket <= 0) {
// // //       alert('Please enter valid ticket price');
// // //       return false;
// // //     }
// // //     if (!formData.checkIn) {
// // //       alert('Please select event date');
// // //       return false;
// // //     }
// // //     if (imageFiles.length === 0) {
// // //       alert('Please upload at least one image');
// // //       return false;
// // //     }
// // //     if (formData.amenities.length === 0) {
// // //       alert('Please select at least one amenity');
// // //       return false;
// // //     }
// // //     return true;
// // //   };

// // //   const handleSubmit = async (e) => {
// // //     e.preventDefault();
    
// // //     // Mock current user - in real app, get from useAuth()
// // //     const mockUser = {
// // //       uid: 'user123',
// // //       displayName: 'Event Organizer',
// // //       email: 'organizer@example.com'
// // //     };

// // //     if (!validateForm()) {
// // //       return;
// // //     }

// // //     setLoading(true);
// // //     setUploading(true);

// // //     try {
// // //       // Simulate image upload
// // //       alert('Uploading images...');
      
// // //       // In a real implementation, you would:
// // //       // 1. Upload images to Firebase Storage
// // //       // 2. Get download URLs
// // //       // 3. Create event in Firestore with those URLs
      
// // //       // For demo purposes, using placeholder images
// // //       const imageUrls = imagePreviews;

// // //       // Format the date
// // //       const eventDate = new Date(formData.checkIn);
// // //       const formattedDate = eventDate.toDateString();

// // //       // Create event data
// // //       const eventData = {
// // //         _id: `event_${Date.now()}`,
// // //         name: formData.name,
// // //         eventType: formData.eventType,
// // //         address: formData.address,
// // //         ticket: Number(formData.ticket),
// // //         checkIn: formattedDate,
// // //         amenities: formData.amenities,
// // //         images: imageUrls,
// // //         isAvailable: formData.isAvailable,
// // //         organizerId: mockUser.uid,
// // //         organizerName: mockUser.displayName,
// // //         createdAt: new Date().toISOString()
// // //       };

// // //       console.log('Event created:', eventData);
      
// // //       // In real app: await createEvent(eventData, mockUser.uid);
      
// // //       alert('Event created successfully!');

// // //       // Clear form
// // //       setFormData({
// // //         name: '',
// // //         eventType: '',
// // //         address: '',
// // //         ticket: '',
// // //         checkIn: '',
// // //         amenities: [],
// // //         images: [],
// // //         isAvailable: true
// // //       });
// // //       setImageFiles([]);
// // //       setImagePreviews([]);

// // //     } catch (error) {
// // //       console.error('Error creating event:', error);
// // //       alert('Failed to create event. Please try again.');
// // //     } finally {
// // //       setLoading(false);
// // //       setUploading(false);
// // //     }
// // //   };

// // //   return (
// // //     <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      
// // //       <div className="max-w-4xl mx-auto">
// // //         {/* Header */}
// // //         <div className="mb-8">
// // //           <button
// // //             onClick={() => window.history.back()}
// // //             className="text-gray-600 hover:text-gray-900 mb-4 flex items-center gap-2"
// // //           >
// // //             ← Back to Events
// // //           </button>
// // //           <h1 className="text-3xl font-bold text-gray-900">Create New Event</h1>
// // //           <p className="text-gray-600 mt-2">Fill in the details to create your event</p>
// // //         </div>

// // //         <div className="bg-white rounded-xl shadow-md p-8 space-y-6">
          
// // //           {/* Event Name */}
// // //           <div>
// // //             <label className="block text-sm font-semibold text-gray-900 mb-2">
// // //               Event Name *
// // //             </label>
// // //             <input
// // //               type="text"
// // //               value={formData.name}
// // //               onChange={(e) => handleChange('name', e.target.value)}
// // //               placeholder="e.g., Summer Music Festival 2025"
// // //               className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
// // //               disabled={loading}
// // //             />
// // //           </div>

// // //           {/* Event Type */}
// // //           <div>
// // //             <label className="block text-sm font-semibold text-gray-900 mb-2">
// // //               Event Type *
// // //             </label>
// // //             <select
// // //               value={formData.eventType}
// // //               onChange={(e) => handleChange('eventType', e.target.value)}
// // //               className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
// // //               disabled={loading}
// // //             >
// // //               <option value="">Select event type</option>
// // //               {eventTypes.map(type => (
// // //                 <option key={type} value={type}>{type}</option>
// // //               ))}
// // //             </select>
// // //           </div>

// // //           {/* Address */}
// // //           <div>
// // //             <label className="block text-sm font-semibold text-gray-900 mb-2">
// // //               <MapPin className="inline w-4 h-4 mr-1" />
// // //               Event Location *
// // //             </label>
// // //             <input
// // //               type="text"
// // //               value={formData.address}
// // //               onChange={(e) => handleChange('address', e.target.value)}
// // //               placeholder="e.g., Independence Square, Accra"
// // //               className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
// // //               disabled={loading}
// // //             />
// // //           </div>

// // //           {/* Ticket Price and Date */}
// // //           <div className="grid md:grid-cols-2 gap-6">
// // //             <div>
// // //               <label className="block text-sm font-semibold text-gray-900 mb-2">
// // //                 <DollarSign className="inline w-4 h-4 mr-1" />
// // //                 Ticket Price (₵) *
// // //               </label>
// // //               <input
// // //                 type="number"
// // //                 value={formData.ticket}
// // //                 onChange={(e) => handleChange('ticket', e.target.value)}
// // //                 placeholder="e.g., 150"
// // //                 min="0"
// // //                 step="0.01"
// // //                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
// // //                 disabled={loading}
// // //               />
// // //             </div>

// // //             <div>
// // //               <label className="block text-sm font-semibold text-gray-900 mb-2">
// // //                 <Calendar className="inline w-4 h-4 mr-1" />
// // //                 Event Date *
// // //               </label>
// // //               <input
// // //                 type="date"
// // //                 value={formData.checkIn}
// // //                 onChange={(e) => handleChange('checkIn', e.target.value)}
// // //                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
// // //                 disabled={loading}
// // //               />
// // //             </div>
// // //           </div>

// // //           {/* Images Upload */}
// // //           <div>
// // //             <label className="block text-sm font-semibold text-gray-900 mb-2">
// // //               <Upload className="inline w-4 h-4 mr-1" />
// // //               Event Images * (Max 5)
// // //             </label>
            
// // //             <div className="border-2 border-dashed border-gray-300 rounded-lg p-6">
// // //               <input
// // //                 type="file"
// // //                 accept="image/*"
// // //                 multiple
// // //                 onChange={handleImageSelect}
// // //                 className="hidden"
// // //                 id="image-upload"
// // //                 disabled={loading || imageFiles.length >= 5}
// // //               />
              
// // //               {imagePreviews.length === 0 ? (
// // //                 <label
// // //                   htmlFor="image-upload"
// // //                   className="flex flex-col items-center justify-center cursor-pointer"
// // //                 >
// // //                   <Upload className="w-12 h-12 text-gray-400 mb-3" />
// // //                   <p className="text-gray-600 text-sm">Click to upload images</p>
// // //                   <p className="text-gray-400 text-xs mt-1">PNG, JPG up to 5 images</p>
// // //                 </label>
// // //               ) : (
// // //                 <div className="space-y-4">
// // //                   <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
// // //                     {imagePreviews.map((preview, index) => (
// // //                       <div key={index} className="relative group">
// // //                         <img
// // //                           src={preview}
// // //                           alt={`Preview ${index + 1}`}
// // //                           className="w-full h-32 object-cover rounded-lg"
// // //                         />
// // //                         <button
// // //                           type="button"
// // //                           onClick={() => removeImage(index)}
// // //                           className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
// // //                         >
// // //                           <X className="w-4 h-4" />
// // //                         </button>
// // //                       </div>
// // //                     ))}
// // //                   </div>
                  
// // //                   {imageFiles.length < 5 && (
// // //                     <label
// // //                       htmlFor="image-upload"
// // //                       className="flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50"
// // //                     >
// // //                       <Plus className="w-4 h-4" />
// // //                       <span className="text-sm">Add More Images</span>
// // //                     </label>
// // //                   )}
// // //                 </div>
// // //               )}
// // //             </div>
// // //           </div>

// // //           {/* Amenities */}
// // //           <div>
// // //             <label className="block text-sm font-semibold text-gray-900 mb-3">
// // //               Event Amenities *
// // //             </label>
            
// // //             <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-4">
// // //               {commonAmenities.map(amenity => (
// // //                 <button
// // //                   key={amenity}
// // //                   type="button"
// // //                   onClick={() => toggleAmenity(amenity)}
// // //                   className={`px-4 py-2 rounded-lg border-2 transition-all ${
// // //                     formData.amenities.includes(amenity)
// // //                       ? 'border-red-500 bg-red-50 text-red-700'
// // //                       : 'border-gray-300 hover:border-gray-400'
// // //                   }`}
// // //                   disabled={loading}
// // //                 >
// // //                   {amenity}
// // //                 </button>
// // //               ))}
// // //             </div>

// // //             {/* Custom Amenity */}
// // //             <div className="flex gap-2">
// // //               <input
// // //                 type="text"
// // //                 value={newAmenity}
// // //                 onChange={(e) => setNewAmenity(e.target.value)}
// // //                 placeholder="Add custom amenity"
// // //                 className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
// // //                 disabled={loading}
// // //                 onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addCustomAmenity())}
// // //               />
// // //               <button
// // //                 type="button"
// // //                 onClick={addCustomAmenity}
// // //                 className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition"
// // //                 disabled={loading}
// // //               >
// // //                 <Plus className="w-5 h-5" />
// // //               </button>
// // //             </div>

// // //             {/* Selected Amenities */}
// // //             {formData.amenities.length > 0 && (
// // //               <div className="mt-3 flex flex-wrap gap-2">
// // //                 {formData.amenities.map(amenity => (
// // //                   <span
// // //                     key={amenity}
// // //                     className="inline-flex items-center gap-1 px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm"
// // //                   >
// // //                     {amenity}
// // //                     <button
// // //                       type="button"
// // //                       onClick={() => toggleAmenity(amenity)}
// // //                       className="hover:text-red-900"
// // //                     >
// // //                       <X className="w-3 h-3" />
// // //                     </button>
// // //                   </span>
// // //                 ))}
// // //               </div>
// // //             )}
// // //           </div>

// // //           {/* Availability Toggle */}
// // //           <div className="flex items-center gap-3">
// // //             <input
// // //               type="checkbox"
// // //               id="availability"
// // //               checked={formData.isAvailable}
// // //               onChange={(e) => handleChange('isAvailable', e.target.checked)}
// // //               className="w-5 h-5 accent-red-600"
// // //               disabled={loading}
// // //             />
// // //             <label htmlFor="availability" className="text-sm text-gray-700">
// // //               Event is available for booking
// // //             </label>
// // //           </div>

// // //           {/* Submit Button */}
// // //           <div className="flex gap-4 pt-4">
// // //             <button
// // //               type="button"
// // //               onClick={handleSubmit}
// // //               disabled={loading}
// // //               className="flex-1 bg-gradient-to-r from-red-600 to-pink-600 text-white font-semibold py-3 rounded-lg hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
// // //             >
// // //               {loading ? (uploading ? 'Uploading Images...' : 'Creating Event...') : 'Create Event'}
// // //             </button>
            
// // //             <button
// // //               type="button"
// // //               onClick={() => window.history.back()}
// // //               className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition"
// // //               disabled={loading}
// // //             >
// // //               Cancel
// // //             </button>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // }



// // import React, { useState } from 'react';
// // import { useNavigate } from 'react-router-dom';
// // import { useAuth } from '../firebase/Authcontext';
// // import { createEvent } from '../firebase/firestoreservice';
// // import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
// // import { storage } from '../firebase/config';
// // import toast, { Toaster } from 'react-hot-toast';
// // import { Calendar, MapPin, DollarSign, Upload, X, Plus } from 'lucide-react';

// // export default function NewEvents() {
// //   const navigate = useNavigate();
// //   const { currentUser } = useAuth();
// //   const [loading, setLoading] = useState(false);
// //   const [uploading, setUploading] = useState(false);

// //   const [formData, setFormData] = useState({
// //     name: '',
// //     eventType: '',
// //     address: '',
// //     ticket: '',
// //     checkIn: '',
// //     amenities: [],
// //     images: [],
// //     isAvailable: true
// //   });

// //   const [imageFiles, setImageFiles] = useState([]);
// //   const [imagePreviews, setImagePreviews] = useState([]);
// //   const [newAmenity, setNewAmenity] = useState('');

// //   const eventTypes = [
// //     'Conference',
// //     'Concert',
// //     'Workshop',
// //     'Festival',
// //     'Sports',
// //     'Theater',
// //     'Networking',
// //     'Exhibition',
// //     'Seminar',
// //     'Party',
// //     'Other'
// //   ];

// //   const commonAmenities = [
// //     'WiFi',
// //     'Parking',
// //     'Food & Drinks',
// //     'AC',
// //     'Wheelchair Access',
// //     'Photography',
// //     'Security',
// //     'Restrooms',
// //     'Stage',
// //     'Sound System'
// //   ];

// //   const handleChange = (field, value) => {
// //     setFormData({
// //       ...formData,
// //       [field]: value
// //     });
// //   };

// //   const handleImageSelect = (e) => {
// //     const files = Array.from(e.target.files);
    
// //     if (imageFiles.length + files.length > 5) {
// //       toast.error('Maximum 5 images allowed');
// //       return;
// //     }

// //     setImageFiles([...imageFiles, ...files]);

// //     // Create preview URLs
// //     const newPreviews = files.map(file => URL.createObjectURL(file));
// //     setImagePreviews([...imagePreviews, ...newPreviews]);
// //   };

// //   const removeImage = (index) => {
// //     const newFiles = imageFiles.filter((_, i) => i !== index);
// //     const newPreviews = imagePreviews.filter((_, i) => i !== index);
    
// //     // Revoke the URL to avoid memory leaks
// //     URL.revokeObjectURL(imagePreviews[index]);
    
// //     setImageFiles(newFiles);
// //     setImagePreviews(newPreviews);
// //   };

// //   const uploadImages = async () => {
// //     const uploadedUrls = [];
    
// //     for (let i = 0; i < imageFiles.length; i++) {
// //       const file = imageFiles[i];
// //       const storageRef = ref(storage, `events/${currentUser.uid}/${Date.now()}_${file.name}`);
      
// //       try {
// //         await uploadBytes(storageRef, file);
// //         const url = await getDownloadURL(storageRef);
// //         uploadedUrls.push(url);
// //       } catch (error) {
// //         console.error('Error uploading image:', error);
// //         throw error;
// //       }
// //     }
    
// //     return uploadedUrls;
// //   };

// //   const toggleAmenity = (amenity) => {
// //     if (formData.amenities.includes(amenity)) {
// //       setFormData({
// //         ...formData,
// //         amenities: formData.amenities.filter(a => a !== amenity)
// //       });
// //     } else {
// //       setFormData({
// //         ...formData,
// //         amenities: [...formData.amenities, amenity]
// //       });
// //     }
// //   };

// //   const addCustomAmenity = () => {
// //     if (newAmenity.trim() && !formData.amenities.includes(newAmenity.trim())) {
// //       setFormData({
// //         ...formData,
// //         amenities: [...formData.amenities, newAmenity.trim()]
// //       });
// //       setNewAmenity('');
// //     }
// //   };

// //   const validateForm = () => {
// //     if (!formData.name.trim()) {
// //       toast.error('Please enter event name');
// //       return false;
// //     }
// //     if (!formData.eventType) {
// //       toast.error('Please select event type');
// //       return false;
// //     }
// //     if (!formData.address.trim()) {
// //       toast.error('Please enter event address');
// //       return false;
// //     }
// //     if (!formData.ticket || formData.ticket <= 0) {
// //       toast.error('Please enter valid ticket price');
// //       return false;
// //     }
// //     if (!formData.checkIn) {
// //       toast.error('Please select event date');
// //       return false;
// //     }
// //     if (imageFiles.length === 0) {
// //       toast.error('Please upload at least one image');
// //       return false;
// //     }
// //     if (formData.amenities.length === 0) {
// //       toast.error('Please select at least one amenity');
// //       return false;
// //     }
// //     return true;
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
    
// //     if (!currentUser) {
// //       toast.error('Please sign in to create an event');
// //       setTimeout(() => {
// //         navigate('/signin');
// //       }, 1500);
// //       return;
// //     }

// //     if (!validateForm()) {
// //       return;
// //     }

// //     setLoading(true);
// //     setUploading(true);

// //     try {
// //       // Upload images first
// //       toast.loading('Uploading images...');
// //       const imageUrls = await uploadImages();
// //       toast.dismiss();

// //       // Format the date
// //       const eventDate = new Date(formData.checkIn);
// //       const formattedDate = eventDate.toDateString();

// //       // Create event data
// //       const eventData = {
// //         name: formData.name,
// //         eventType: formData.eventType,
// //         address: formData.address,
// //         ticket: Number(formData.ticket),
// //         checkIn: formattedDate,
// //         amenities: formData.amenities,
// //         images: imageUrls,
// //         isAvailable: formData.isAvailable,
// //         organizerId: currentUser.uid,
// //         organizerName: currentUser.displayName || currentUser.email,
// //         createdAt: new Date().toISOString()
// //       };

// //       // Save to Firebase
// //       const createdEvent = await createEvent(eventData, currentUser.uid);
// //       console.log('Event created:', createdEvent);

// //       toast.success('Event created successfully!', {
// //         duration: 3000,
// //         position: 'top-center',
// //       });

// //       // Clear form
// //       setFormData({
// //         name: '',
// //         eventType: '',
// //         address: '',
// //         ticket: '',
// //         checkIn: '',
// //         amenities: [],
// //         images: [],
// //         isAvailable: true
// //       });
// //       setImageFiles([]);
// //       setImagePreviews([]);

// //       setTimeout(() => {
// //         navigate('/events');
// //       }, 2000);

// //     } catch (error) {
// //       console.error('Error creating event:', error);
// //       toast.error('Failed to create event. Please try again.');
// //     } finally {
// //       setLoading(false);
// //       setUploading(false);
// //     }
// //   };

// //   return (
// //     <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
// //       <Toaster position="top-center" />
      
// //       <div className="max-w-4xl mx-auto">
// //         {/* Header */}
// //         <div className="mb-8">
// //           <button
// //             onClick={() => navigate('/events')}
// //             className="text-gray-600 hover:text-gray-900 mb-4 flex items-center gap-2"
// //           >
// //             ← Back to Events
// //           </button>
// //           <h1 className="text-3xl font-bold text-gray-900">Create New Event</h1>
// //           <p className="text-gray-600 mt-2">Fill in the details to create your event</p>
// //         </div>

// //         <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-md p-8 space-y-6">
          
// //           {/* Event Name */}
// //           <div>
// //             <label className="block text-sm font-semibold text-gray-900 mb-2">
// //               Event Name *
// //             </label>
// //             <input
// //               type="text"
// //               value={formData.name}
// //               onChange={(e) => handleChange('name', e.target.value)}
// //               placeholder="e.g., Summer Music Festival 2025"
// //               className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
// //               disabled={loading}
// //             />
// //           </div>

// //           {/* Event Type */}
// //           <div>
// //             <label className="block text-sm font-semibold text-gray-900 mb-2">
// //               Event Type *
// //             </label>
// //             <select
// //               value={formData.eventType}
// //               onChange={(e) => handleChange('eventType', e.target.value)}
// //               className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
// //               disabled={loading}
// //             >
// //               <option value="">Select event type</option>
// //               {eventTypes.map(type => (
// //                 <option key={type} value={type}>{type}</option>
// //               ))}
// //             </select>
// //           </div>

// //           {/* Address */}
// //           <div>
// //             <label className="block text-sm font-semibold text-gray-900 mb-2">
// //               <MapPin className="inline w-4 h-4 mr-1" />
// //               Event Location *
// //             </label>
// //             <input
// //               type="text"
// //               value={formData.address}
// //               onChange={(e) => handleChange('address', e.target.value)}
// //               placeholder="e.g., Independence Square, Accra"
// //               className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
// //               disabled={loading}
// //             />
// //           </div>

// //           {/* Ticket Price and Date */}
// //           <div className="grid md:grid-cols-2 gap-6">
// //             <div>
// //               <label className="block text-sm font-semibold text-gray-900 mb-2">
// //                 <DollarSign className="inline w-4 h-4 mr-1" />
// //                 Ticket Price (₵) *
// //               </label>
// //               <input
// //                 type="number"
// //                 value={formData.ticket}
// //                 onChange={(e) => handleChange('ticket', e.target.value)}
// //                 placeholder="e.g., 150"
// //                 min="0"
// //                 step="0.01"
// //                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
// //                 disabled={loading}
// //               />
// //             </div>

// //             <div>
// //               <label className="block text-sm font-semibold text-gray-900 mb-2">
// //                 <Calendar className="inline w-4 h-4 mr-1" />
// //                 Event Date *
// //               </label>
// //               <input
// //                 type="date"
// //                 value={formData.checkIn}
// //                 onChange={(e) => handleChange('checkIn', e.target.value)}
// //                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
// //                 disabled={loading}
// //               />
// //             </div>
// //           </div>

// //           {/* Images Upload */}
// //           <div>
// //             <label className="block text-sm font-semibold text-gray-900 mb-2">
// //               <Upload className="inline w-4 h-4 mr-1" />
// //               Event Images * (Max 5)
// //             </label>
            
// //             <div className="border-2 border-dashed border-gray-300 rounded-lg p-6">
// //               <input
// //                 type="file"
// //                 accept="image/*"
// //                 multiple
// //                 onChange={handleImageSelect}
// //                 className="hidden"
// //                 id="image-upload"
// //                 disabled={loading || imageFiles.length >= 5}
// //               />
              
// //               {imagePreviews.length === 0 ? (
// //                 <label
// //                   htmlFor="image-upload"
// //                   className="flex flex-col items-center justify-center cursor-pointer"
// //                 >
// //                   <Upload className="w-12 h-12 text-gray-400 mb-3" />
// //                   <p className="text-gray-600 text-sm">Click to upload images</p>
// //                   <p className="text-gray-400 text-xs mt-1">PNG, JPG up to 5 images</p>
// //                 </label>
// //               ) : (
// //                 <div className="space-y-4">
// //                   <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
// //                     {imagePreviews.map((preview, index) => (
// //                       <div key={index} className="relative group">
// //                         <img
// //                           src={preview}
// //                           alt={`Preview ${index + 1}`}
// //                           className="w-full h-32 object-cover rounded-lg"
// //                         />
// //                         <button
// //                           type="button"
// //                           onClick={() => removeImage(index)}
// //                           className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
// //                         >
// //                           <X className="w-4 h-4" />
// //                         </button>
// //                       </div>
// //                     ))}
// //                   </div>
                  
// //                   {imageFiles.length < 5 && (
// //                     <label
// //                       htmlFor="image-upload"
// //                       className="flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50"
// //                     >
// //                       <Plus className="w-4 h-4" />
// //                       <span className="text-sm">Add More Images</span>
// //                     </label>
// //                   )}
// //                 </div>
// //               )}
// //             </div>
// //           </div>

// //           {/* Amenities */}
// //           <div>
// //             <label className="block text-sm font-semibold text-gray-900 mb-3">
// //               Event Amenities *
// //             </label>
            
// //             <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-4">
// //               {commonAmenities.map(amenity => (
// //                 <button
// //                   key={amenity}
// //                   type="button"
// //                   onClick={() => toggleAmenity(amenity)}
// //                   className={`px-4 py-2 rounded-lg border-2 transition-all ${
// //                     formData.amenities.includes(amenity)
// //                       ? 'border-red-500 bg-red-50 text-red-700'
// //                       : 'border-gray-300 hover:border-gray-400'
// //                   }`}
// //                   disabled={loading}
// //                 >
// //                   {amenity}
// //                 </button>
// //               ))}
// //             </div>

// //             {/* Custom Amenity */}
// //             <div className="flex gap-2">
// //               <input
// //                 type="text"
// //                 value={newAmenity}
// //                 onChange={(e) => setNewAmenity(e.target.value)}
// //                 placeholder="Add custom amenity"
// //                 className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
// //                 disabled={loading}
// //                 onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addCustomAmenity())}
// //               />
// //               <button
// //                 type="button"
// //                 onClick={addCustomAmenity}
// //                 className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition"
// //                 disabled={loading}
// //               >
// //                 <Plus className="w-5 h-5" />
// //               </button>
// //             </div>

// //             {/* Selected Amenities */}
// //             {formData.amenities.length > 0 && (
// //               <div className="mt-3 flex flex-wrap gap-2">
// //                 {formData.amenities.map(amenity => (
// //                   <span
// //                     key={amenity}
// //                     className="inline-flex items-center gap-1 px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm"
// //                   >
// //                     {amenity}
// //                     <button
// //                       type="button"
// //                       onClick={() => toggleAmenity(amenity)}
// //                       className="hover:text-red-900"
// //                     >
// //                       <X className="w-3 h-3" />
// //                     </button>
// //                   </span>
// //                 ))}
// //               </div>
// //             )}
// //           </div>

// //           {/* Availability Toggle */}
// //           <div className="flex items-center gap-3">
// //             <input
// //               type="checkbox"
// //               id="availability"
// //               checked={formData.isAvailable}
// //               onChange={(e) => handleChange('isAvailable', e.target.checked)}
// //               className="w-5 h-5 accent-red-600"
// //               disabled={loading}
// //             />
// //             <label htmlFor="availability" className="text-sm text-gray-700">
// //               Event is available for booking
// //             </label>
// //           </div>

// //           {/* Submit Button */}
// //           <div className="flex gap-4 pt-4">
// //             <button
// //               type="submit"
// //               disabled={loading}
// //               className="flex-1 bg-gradient-to-r from-red-600 to-pink-600 text-white font-semibold py-3 rounded-lg hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
// //             >
// //               {loading ? (uploading ? 'Uploading Images...' : 'Creating Event...') : 'Create Event'}
// //             </button>
            
// //             <button
// //               type="button"
// //               onClick={() => navigate('/events')}
// //               className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition"
// //               disabled={loading}
// //             >
// //               Cancel
// //             </button>
// //           </div>
// //         </form>
// //       </div>
// //     </div>
// //   );
// // }


// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useAuth } from '../firebase/Authcontext';
// import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
// import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
// import { storage, db } from '../firebase/config';
// import toast, { Toaster } from 'react-hot-toast';
// import { Calendar, MapPin, DollarSign, Upload, X, Plus } from 'lucide-react';

// export default function NewEvents() {
//   const navigate = useNavigate();
//   const { currentUser } = useAuth();
//   const [loading, setLoading] = useState(false);

//   const [formData, setFormData] = useState({
//     name: '',
//     eventType: '',
//     address: '',
//     ticket: '',
//     checkIn: '',
//     amenities: [],
//     isAvailable: true
//   });

//   const [imageFiles, setImageFiles] = useState([]);
//   const [imagePreviews, setImagePreviews] = useState([]);
//   const [newAmenity, setNewAmenity] = useState('');

//   const eventTypes = [
//     'Conference',
//     'Concert',
//     'Workshop',
//     'Festival',
//     'Sports',
//     'Theater',
//     'Networking',
//     'Exhibition',
//     'Seminar',
//     'Party',
//     'Other'
//   ];

//   const commonAmenities = [
//     'WiFi',
//     'Parking',
//     'Food & Drinks',
//     'AC',
//     'Wheelchair Access',
//     'Photography',
//     'Security',
//     'Restrooms',
//     'Stage',
//     'Sound System'
//   ];

//   const handleChange = (field, value) => {
//     setFormData({
//       ...formData,
//       [field]: value
//     });
//   };

//   const handleImageSelect = (e) => {
//     const files = Array.from(e.target.files);
    
//     if (imageFiles.length + files.length > 5) {
//       toast.error('Maximum 5 images allowed');
//       return;
//     }

//     setImageFiles([...imageFiles, ...files]);

//     // Create preview URLs
//     const newPreviews = files.map(file => URL.createObjectURL(file));
//     setImagePreviews([...imagePreviews, ...newPreviews]);
//   };

//   const removeImage = (index) => {
//     const newFiles = imageFiles.filter((_, i) => i !== index);
//     const newPreviews = imagePreviews.filter((_, i) => i !== index);
    
//     // Revoke the URL to avoid memory leaks
//     URL.revokeObjectURL(imagePreviews[index]);
    
//     setImageFiles(newFiles);
//     setImagePreviews(newPreviews);
//   };

//   const uploadImages = async () => {
//     const uploadedUrls = [];
    
//     for (let i = 0; i < imageFiles.length; i++) {
//       const file = imageFiles[i];
//       const timestamp = Date.now();
//       const fileName = `${timestamp}_${i}_${file.name}`;
//       const storageRef = ref(storage, `events/${currentUser.uid}/${fileName}`);
      
//       try {
//         console.log('Uploading image:', fileName);
//         const snapshot = await uploadBytes(storageRef, file);
//         const url = await getDownloadURL(snapshot.ref);
//         uploadedUrls.push(url);
//         console.log('Image uploaded:', url);
//       } catch (error) {
//         console.error('Error uploading image:', error);
//         throw new Error(`Failed to upload image: ${error.message}`);
//       }
//     }
    
//     return uploadedUrls;
//   };

//   const toggleAmenity = (amenity) => {
//     if (formData.amenities.includes(amenity)) {
//       setFormData({
//         ...formData,
//         amenities: formData.amenities.filter(a => a !== amenity)
//       });
//     } else {
//       setFormData({
//         ...formData,
//         amenities: [...formData.amenities, amenity]
//       });
//     }
//   };

//   const addCustomAmenity = () => {
//     if (newAmenity.trim() && !formData.amenities.includes(newAmenity.trim())) {
//       setFormData({
//         ...formData,
//         amenities: [...formData.amenities, newAmenity.trim()]
//       });
//       setNewAmenity('');
//     }
//   };

//   const validateForm = () => {
//     if (!currentUser) {
//       toast.error('Please sign in to create an event');
//       return false;
//     }
//     if (!formData.name.trim()) {
//       toast.error('Please enter event name');
//       return false;
//     }
//     if (!formData.eventType) {
//       toast.error('Please select event type');
//       return false;
//     }
//     if (!formData.address.trim()) {
//       toast.error('Please enter event address');
//       return false;
//     }
//     if (!formData.ticket || formData.ticket <= 0) {
//       toast.error('Please enter valid ticket price');
//       return false;
//     }
//     if (!formData.checkIn) {
//       toast.error('Please select event date');
//       return false;
//     }
//     if (imageFiles.length === 0) {
//       toast.error('Please upload at least one image');
//       return false;
//     }
//     if (formData.amenities.length === 0) {
//       toast.error('Please select at least one amenity');
//       return false;
//     }
//     return true;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
    
//     if (!validateForm()) {
//       return;
//     }

//     setLoading(true);

//     try {
//       // Step 1: Upload images
//       console.log('Starting image upload...');
//       toast.loading('Uploading images...', { id: 'upload' });
//       const imageUrls = await uploadImages();
//       toast.success(`${imageUrls.length} images uploaded!`, { id: 'upload' });

//       // Step 2: Format the date
//       const eventDate = new Date(formData.checkIn);
//       const formattedDate = eventDate.toDateString();

//       // Step 3: Create event data
//       const eventData = {
//         _id: `event_${Date.now()}`, // Custom ID for compatibility
//         name: formData.name,
//         eventType: formData.eventType,
//         address: formData.address,
//         ticket: Number(formData.ticket),
//         checkIn: formattedDate,
//         amenities: formData.amenities,
//         images: imageUrls,
//         isAvailable: formData.isAvailable,
//         organizerId: currentUser.uid,
//         organizerName: currentUser.displayName || currentUser.email,
//         createdAt: serverTimestamp(),
//         updatedAt: serverTimestamp()
//       };

//       // Step 4: Save to Firestore
//       console.log('Saving event to Firestore...');
//       toast.loading('Creating event...', { id: 'create' });
//       const docRef = await addDoc(collection(db, 'events'), eventData);
//       console.log('Event created with ID:', docRef.id);
      
//       toast.success('Event created successfully!', { id: 'create', duration: 3000 });

//       // Step 5: Clear form
//       setFormData({
//         name: '',
//         eventType: '',
//         address: '',
//         ticket: '',
//         checkIn: '',
//         amenities: [],
//         isAvailable: true
//       });
//       setImageFiles([]);
      
//       // Clean up preview URLs
//       imagePreviews.forEach(url => URL.revokeObjectURL(url));
//       setImagePreviews([]);

//       // Step 6: Redirect to events page
//       setTimeout(() => {
//         navigate('/events');
//       }, 2000);

//     } catch (error) {
//       console.error('Error creating event:', error);
//       toast.error(`Failed to create event: ${error.message}`, { duration: 5000 });
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Check if user is signed in
//   if (!currentUser) {
//     return (
//       <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
//         <div className="text-center">
//           <h2 className="text-2xl font-bold text-gray-900 mb-4">Sign In Required</h2>
//           <p className="text-gray-600 mb-6">You must be signed in as an organizer to create events.</p>
//           <button
//             onClick={() => navigate('/signin')}
//             className="bg-red-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-600"
//           >
//             Sign In
//           </button>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
//       <Toaster position="top-center" />
      
//       <div className="max-w-4xl mx-auto">
//         {/* Header */}
//         <div className="mb-8">
//           <button
//             onClick={() => navigate('/events')}
//             className="text-gray-600 hover:text-gray-900 mb-4 flex items-center gap-2"
//           >
//             ← Back to Events
//           </button>
//           <h1 className="text-3xl font-bold text-gray-900">Create New Event</h1>
//           <p className="text-gray-600 mt-2">Fill in the details to create your event</p>
//         </div>

//         <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-md p-8 space-y-6">
          
//           {/* Event Name */}
//           <div>
//             <label className="block text-sm font-semibold text-gray-900 mb-2">
//               Event Name *
//             </label>
//             <input
//               type="text"
//               value={formData.name}
//               onChange={(e) => handleChange('name', e.target.value)}
//               placeholder="e.g., Summer Music Festival 2025"
//               className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
//               disabled={loading}
//             />
//           </div>

//           {/* Event Type */}
//           <div>
//             <label className="block text-sm font-semibold text-gray-900 mb-2">
//               Event Type *
//             </label>
//             <select
//               value={formData.eventType}
//               onChange={(e) => handleChange('eventType', e.target.value)}
//               className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
//               disabled={loading}
//             >
//               <option value="">Select event type</option>
//               {eventTypes.map(type => (
//                 <option key={type} value={type}>{type}</option>
//               ))}
//             </select>
//           </div>

//           {/* Address */}
//           <div>
//             <label className="block text-sm font-semibold text-gray-900 mb-2">
//               <MapPin className="inline w-4 h-4 mr-1" />
//               Event Location *
//             </label>
//             <input
//               type="text"
//               value={formData.address}
//               onChange={(e) => handleChange('address', e.target.value)}
//               placeholder="e.g., Independence Square, Accra"
//               className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
//               disabled={loading}
//             />
//           </div>

//           {/* Ticket Price and Date */}
//           <div className="grid md:grid-cols-2 gap-6">
//             <div>
//               <label className="block text-sm font-semibold text-gray-900 mb-2">
//                 <DollarSign className="inline w-4 h-4 mr-1" />
//                 Ticket Price (₵) *
//               </label>
//               <input
//                 type="number"
//                 value={formData.ticket}
//                 onChange={(e) => handleChange('ticket', e.target.value)}
//                 placeholder="e.g., 150"
//                 min="0"
//                 step="0.01"
//                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
//                 disabled={loading}
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-semibold text-gray-900 mb-2">
//                 <Calendar className="inline w-4 h-4 mr-1" />
//                 Event Date *
//               </label>
//               <input
//                 type="date"
//                 value={formData.checkIn}
//                 onChange={(e) => handleChange('checkIn', e.target.value)}
//                 min={new Date().toISOString().split('T')[0]}
//                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
//                 disabled={loading}
//               />
//             </div>
//           </div>

//           {/* Images Upload */}
//           <div>
//             <label className="block text-sm font-semibold text-gray-900 mb-2">
//               <Upload className="inline w-4 h-4 mr-1" />
//               Event Images * (Max 5)
//             </label>
            
//             <div className="border-2 border-dashed border-gray-300 rounded-lg p-6">
//               <input
//                 type="file"
//                 accept="image/*"
//                 multiple
//                 onChange={handleImageSelect}
//                 className="hidden"
//                 id="image-upload"
//                 disabled={loading || imageFiles.length >= 5}
//               />
              
//               {imagePreviews.length === 0 ? (
//                 <label
//                   htmlFor="image-upload"
//                   className="flex flex-col items-center justify-center cursor-pointer"
//                 >
//                   <Upload className="w-12 h-12 text-gray-400 mb-3" />
//                   <p className="text-gray-600 text-sm">Click to upload images</p>
//                   <p className="text-gray-400 text-xs mt-1">PNG, JPG up to 5 images</p>
//                 </label>
//               ) : (
//                 <div className="space-y-4">
//                   <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
//                     {imagePreviews.map((preview, index) => (
//                       <div key={index} className="relative group">
//                         <img
//                           src={preview}
//                           alt={`Preview ${index + 1}`}
//                           className="w-full h-32 object-cover rounded-lg"
//                         />
//                         <button
//                           type="button"
//                           onClick={() => removeImage(index)}
//                           disabled={loading}
//                           className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity disabled:opacity-50"
//                         >
//                           <X className="w-4 h-4" />
//                         </button>
//                       </div>
//                     ))}
//                   </div>
                  
//                   {imageFiles.length < 5 && !loading && (
//                     <label
//                       htmlFor="image-upload"
//                       className="flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50"
//                     >
//                       <Plus className="w-4 h-4" />
//                       <span className="text-sm">Add More Images</span>
//                     </label>
//                   )}
//                 </div>
//               )}
//             </div>
//           </div>

//           {/* Amenities */}
//           <div>
//             <label className="block text-sm font-semibold text-gray-900 mb-3">
//               Event Amenities *
//             </label>
            
//             <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-4">
//               {commonAmenities.map(amenity => (
//                 <button
//                   key={amenity}
//                   type="button"
//                   onClick={() => toggleAmenity(amenity)}
//                   className={`px-4 py-2 rounded-lg border-2 transition-all ${
//                     formData.amenities.includes(amenity)
//                       ? 'border-red-500 bg-red-50 text-red-700'
//                       : 'border-gray-300 hover:border-gray-400'
//                   }`}
//                   disabled={loading}
//                 >
//                   {amenity}
//                 </button>
//               ))}
//             </div>

//             {/* Custom Amenity */}
//             <div className="flex gap-2">
//               <input
//                 type="text"
//                 value={newAmenity}
//                 onChange={(e) => setNewAmenity(e.target.value)}
//                 placeholder="Add custom amenity"
//                 className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
//                 disabled={loading}
//                 onKeyPress={(e) => {
//                   if (e.key === 'Enter') {
//                     e.preventDefault();
//                     addCustomAmenity();
//                   }
//                 }}
//               />
//               <button
//                 type="button"
//                 onClick={addCustomAmenity}
//                 className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition disabled:opacity-50"
//                 disabled={loading}
//               >
//                 <Plus className="w-5 h-5" />
//               </button>
//             </div>

//             {/* Selected Amenities */}
//             {formData.amenities.length > 0 && (
//               <div className="mt-3 flex flex-wrap gap-2">
//                 {formData.amenities.map(amenity => (
//                   <span
//                     key={amenity}
//                     className="inline-flex items-center gap-1 px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm"
//                   >
//                     {amenity}
//                     <button
//                       type="button"
//                       onClick={() => toggleAmenity(amenity)}
//                       className="hover:text-red-900"
//                       disabled={loading}
//                     >
//                       <X className="w-3 h-3" />
//                     </button>
//                   </span>
//                 ))}
//               </div>
//             )}
//           </div>

//           {/* Availability Toggle */}
//           <div className="flex items-center gap-3">
//             <input
//               type="checkbox"
//               id="availability"
//               checked={formData.isAvailable}
//               onChange={(e) => handleChange('isAvailable', e.target.checked)}
//               className="w-5 h-5 accent-red-600"
//               disabled={loading}
//             />
//             <label htmlFor="availability" className="text-sm text-gray-700">
//               Event is available for booking
//             </label>
//           </div>

//           {/* Submit Button */}
//           <div className="flex gap-4 pt-4">
//             <button
//               type="submit"
//               disabled={loading}
//               className="flex-1 bg-gradient-to-r from-red-600 to-pink-600 text-white font-semibold py-3 rounded-lg hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
//             >
//               {loading ? 'Creating Event...' : 'Create Event'}
//             </button>
            
//             <button
//               type="button"
//               onClick={() => navigate('/events')}
//               className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition"
//               disabled={loading}
//             >
//               Cancel
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }



import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../firebase/Authcontext';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { db, storage } from '../firebase/config';
import {
  addDoc,
  collection,
  serverTimestamp
} from "firebase/firestore";
import toast, { Toaster } from 'react-hot-toast';
import { Calendar, MapPin, DollarSign, Upload, X, Plus } from 'lucide-react';

export default function NewEvents() {
  const navigate = useNavigate();
  const { currentUser } = useAuth();
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    eventType: '',
    address: '',
    ticket: '',
    date: '',
    amenities: [],
    isAvailable: true
  });

  const [images, setImages] = useState([]);
  const [previews, setPreviews] = useState([]);
  const [customAmenity, setCustomAmenity] = useState('');

  const eventTypes = [
    'Conference', 'Concert', 'Workshop', 'Festival', 'Sports',
    'Theater', 'Networking', 'Exhibition', 'Seminar', 'Party', 'Other'
  ];

  const commonAmenities = [
    'WiFi', 'Parking', 'Food & Drinks', 'AC', 'Wheelchair Access',
    'Photography', 'Security', 'Restrooms', 'Stage', 'Sound System'
  ];

  const handleInput = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);

    if (images.length + files.length > 5) {
      toast.error('Maximum 5 images allowed');
      return;
    }

    const newPreviews = files.map(file => URL.createObjectURL(file));
    setImages(prev => [...prev, ...files]);
    setPreviews(prev => [...prev, ...newPreviews]);
  };

  const removeImage = (index) => {
    URL.revokeObjectURL(previews[index]);
    setImages(prev => prev.filter((_, i) => i !== index));
    setPreviews(prev => prev.filter((_, i) => i !== index));
  };

  const uploadImages = async () => {
    const urls = [];

    for (let i = 0; i < images.length; i++) {
      const file = images[i];
      const fileRef = ref(storage, `events/${currentUser.uid}/${Date.now()}_${i}_${file.name}`);

      const snapshot = await uploadBytes(fileRef, file);
      const url = await getDownloadURL(snapshot.ref);

      urls.push(url);
    }

    return urls;
  };

  const toggleAmenity = (item) => {
    setFormData(prev => ({
      ...prev,
      amenities: prev.amenities.includes(item)
        ? prev.amenities.filter(a => a !== item)
        : [...prev.amenities, item]
    }));
  };

  const addCustomAmenity = () => {
    const trimmed = customAmenity.trim();
    if (trimmed && !formData.amenities.includes(trimmed)) {
      setFormData(prev => ({
        ...prev,
        amenities: [...prev.amenities, trimmed]
      }));
      setCustomAmenity('');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name.trim()) return toast.error('Event name is required');
    if (!formData.eventType) return toast.error('Select event type');
    if (!formData.address.trim()) return toast.error('Event location is required');
    if (!formData.ticket || formData.ticket <= 0) return toast.error('Enter valid ticket price');
    if (!formData.date) return toast.error('Select event date');
    if (images.length === 0) return toast.error('Upload at least 1 image');
    if (formData.amenities.length === 0) return toast.error('Select at least 1 amenity');

    setLoading(true);
    toast.loading('Creating your event...', { id: 'create' });

    try {
      const imageUrls = await uploadImages();

      await addDoc(collection(db, 'events'), {
        name: formData.name.trim(),
        eventType: formData.eventType,
        address: formData.address.trim(),
        ticket: Number(formData.ticket),
        date: formData.date,
        amenities: formData.amenities,
        images: imageUrls,
        isAvailable: formData.isAvailable,
        organizerId: currentUser.uid,
        organizerName: currentUser.displayName || currentUser.email.split('@')[0],
        createdAt: serverTimestamp(),
      });

      toast.success('Event created successfully!', { id: 'create' });

      previews.forEach(url => URL.revokeObjectURL(url));
      setImages([]);
      setPreviews([]);

      setTimeout(() => navigate('/events'), 1500);
    } catch (err) {
      console.error(err);
      toast.error('Failed to create event', { id: 'create' });
    } finally {
      setLoading(false);
    }
  };

  if (!currentUser) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center p-8 bg-white rounded-xl shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Sign In Required</h2>
          <button
            onClick={() => navigate('/signin')}
            className="bg-red-600 text-white px-8 py-3 rounded-lg hover:bg-red-700"
          >
            Sign In to Create Event
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <Toaster position="top-center" />
      <div className="max-w-4xl mx-auto">
        <button
          onClick={() => navigate('/events')}
          className="mb-6 text-gray-600 hover:text-black flex items-center gap-2"
        >
          ← Back to Events
        </button>

        <h1 className="text-4xl font-bold mb-2">Create New Event</h1>
        <p className="text-gray-600 mb-8">Fill in the details below</p>

        <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-lg p-8 space-y-8">

          {/* Name & Type */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold mb-2">Event Name *</label>
              <input
                type="text"
                value={formData.name}
                onChange={e => handleInput('name', e.target.value)}
                placeholder="e.g. AfroFuture 2025"
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                disabled={loading}
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Event Type *</label>
              <select
                value={formData.eventType}
                onChange={e => handleInput('eventType', e.target.value)}
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-red-500"
                disabled={loading}
              >
                <option value="">Choose type</option>
                {eventTypes.map(t => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Location & Price */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold mb-2">
                <MapPin className="inline w-4 h-4" /> Location *
              </label>
              <input
                type="text"
                value={formData.address}
                onChange={e => handleInput('address', e.target.value)}
                placeholder="e.g. Accra International Conference Centre"
                className="w-full px-4 py-3 border rounded-lg"
                disabled={loading}
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">
                <DollarSign className="inline w-4 h-4" /> Ticket Price (₵) *
              </label>
              <input
                type="number"
                min="0"
                step="0.01"
                value={formData.ticket}
                onChange={e => handleInput('ticket', e.target.value)}
                placeholder="150"
                className="w-full px-4 py-3 border rounded-lg"
                disabled={loading}
              />
            </div>
          </div>

          {/* Date */}
          <div>
            <label className="block text-sm font-semibold mb-2">
              <Calendar className="inline w-4 h-4" /> Event Date *
            </label>
            <input
              type="date"
              value={formData.date}
              onChange={e => handleInput('date', e.target.value)}
              min={new Date().toISOString().split('T')[0]}
              className="w-full px-4 py-3 border rounded-lg"
              disabled={loading}
            />
          </div>

          {/* Images */}
          <div>
            <label className="block text-sm font-semibold mb-3">
              <Upload className="inline w-4 h-4" /> Event Images * (Max 5)
            </label>

            <div className="border-2 border-dashed rounded-xl p-6 text-center">
              <input
                type="file"
                accept="image/*"
                multiple
                id="images"
                className="hidden"
                onChange={handleImageChange}
                disabled={loading || images.length >= 5}
              />

              {previews.length === 0 ? (
                <label htmlFor="images" className="cursor-pointer">
                  <Upload className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                  <p className="text-sm">Click to upload up to 5 images</p>
                </label>
              ) : (
                <>
                  <div className="grid grid-cols-3 md:grid-cols-5 gap-4 mb-4">
                    {previews.map((src, i) => (
                      <div key={i} className="relative group">
                        <img
                          src={src}
                          alt=""
                          className="h-32 w-full object-cover rounded-lg"
                        />
                        <button
                          type="button"
                          onClick={() => removeImage(i)}
                          className="absolute top-1 right-1 bg-red-600 text-white rounded-full p-1 opacity-80 group-hover:opacity-100"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>

                  {images.length < 5 && (
                    <label
                      htmlFor="images"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-lg cursor-pointer hover:bg-gray-200"
                    >
                      <Plus className="w-4 h-4" /> Add more
                    </label>
                  )}
                </>
              )}
            </div>
          </div>

          {/* Amenities */}
          <div>
            <label className="block text-sm font-semibold mb-3">Amenities *</label>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {commonAmenities.map(item => (
                <button
                  key={item}
                  type="button"
                  onClick={() => toggleAmenity(item)}
                  className={`py-2 px-4 rounded-lg border-2 transition ${
                    formData.amenities.includes(item)
                      ? 'bg-red-50 border-red-500 text-red-700'
                      : 'border-gray-300 hover:border-gray-400'
                  }`}
                  disabled={loading}
                >
                  {item}
                </button>
              ))}
            </div>

            <div className="flex gap-2 mt-4">
              <input
                type="text"
                value={customAmenity}
                onChange={e => setCustomAmenity(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && (e.preventDefault(), addCustomAmenity())}
                placeholder="Add custom amenity"
                className="flex-1 px-4 py-2 border rounded-lg"
                disabled={loading}
              />
              <button
                type="button"
                onClick={addCustomAmenity}
                className="px-4 bg-gray-200 rounded-lg hover:bg-gray-300"
                disabled={loading}
              >
                <Plus className="w-5 h-5" />
              </button>
            </div>

            {formData.amenities.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-4">
                {formData.amenities.map(a => (
                  <span
                    key={a}
                    className="inline-flex items-center gap-1 px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm"
                  >
                    {a}
                    <X
                      className="w-3 h-3 cursor-pointer"
                      onClick={() => toggleAmenity(a)}
                    />
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Submit */}
          <div className="flex gap-4 pt-6">
            <button
              type="submit"
              disabled={loading}
              className="flex-1 bg-gradient-to-r from-red-600 to-pink-600 text-white font-bold py-4 rounded-xl hover:shadow-xl transition disabled:opacity-60"
            >
              {loading ? 'Creating Event...' : 'Create Event'}
            </button>

            <button
              type="button"
              onClick={() => navigate('/events')}
              className="px-8 py-4 border border-gray-300 rounded-xl hover:bg-gray-50"
              disabled={loading}
            >
              Cancel
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}
