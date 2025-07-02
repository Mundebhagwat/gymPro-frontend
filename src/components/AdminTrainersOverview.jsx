// import React, { useState, useEffect } from 'react';
// import { 
// Plus, 
// Edit3, 
// Trash2, 
// Search, 
// Filter, 
// X, 
// Save, 
// Mail, 
// Phone, 
// Calendar,
// Award,
// Clock,
// MapPin
// } from 'lucide-react';

// const TrainersOverview = () => {
// const [trainers, setTrainers] = useState([]);
// const [loading, setLoading] = useState(true);
// const [error, setError] = useState(null);
// const [isModalOpen, setIsModalOpen] = useState(false);
// const [editingTrainer, setEditingTrainer] = useState(null);
// const [searchTerm, setSearchTerm] = useState('');
// const [formData, setFormData] = useState({
//   name: '',
//   email: '',
//   phone: '',
//   specialty: [],
//   rest_period: 1
// });

// const specialties = ['HIIT Training', 'Yoga & Pilates', 'Strength Training', 'Cardio & Boxing', 'CrossFit', 'Swimming', 'Dance Fitness'];

// // Fetch trainers from API
// const fetchTrainers = async () => {
//   try {
//     setLoading(true);
//     const response = await fetch('https://gympro-backend-i0rv.onrender.com/api/trainers/fetchAll');

//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }

//     const data = await response.json();

//     // Transform API data to match your current component structure
//     const transformedTrainers = data.trainers.map(trainer => ({
//       id: trainer._id,
//       name: trainer.name,
//       email: trainer.email,
//       phone: trainer.phoneNumber,
//       specialty: trainer.skills.length > 0 ? trainer.skills : ['General Training'], // Default if no skills
//       joinDate: trainer.createdAt.split('T')[0], // Convert to YYYY-MM-DD format
//       rest_period: trainer.rest_period
//     }));

//     setTrainers(transformedTrainers);
//     setError(null);
//   } catch (err) {
//     console.error('Error fetching trainers:', err);
//     setError('Failed to fetch trainers. Please check if the backend server is running.');
//   } finally {
//     setLoading(false);
//   }
// };

// // Fetch trainers when component mounts
// useEffect(() => {
//   fetchTrainers();
// }, []);

// const filteredTrainers = trainers.filter(trainer =>
//   trainer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//   trainer.specialty.some(spec => spec.toLowerCase().includes(searchTerm.toLowerCase())) ||
//   trainer.email.toLowerCase().includes(searchTerm.toLowerCase())
// );

// const handleAddTrainer = () => {
//   setEditingTrainer(null);
//   setFormData({
//     name: '',
//     email: '',
//     phone: '',
//     specialty: [],
//     rest_period: 1
//   });
//   setIsModalOpen(true);
// };

// const handleEditTrainer = (trainer) => {
//   setEditingTrainer(trainer);
//   setFormData({ ...trainer });
//   setIsModalOpen(true);
// };

// const handleDeleteTrainer = (id) => {
//   if (window.confirm('Are you sure you want to delete this trainer?')) {
//     setTrainers(trainers.filter(trainer => trainer.id !== id));
//   }
// };

// const handleSaveTrainer = () => {
//   if (!formData.name || !formData.email || formData.specialty.length === 0) {
//     alert('Please fill in all required fields');
//     return;
//   }

//   if (editingTrainer) {
//     setTrainers(trainers.map(trainer =>
//       trainer.id === editingTrainer.id ? { ...formData, id: editingTrainer.id } : trainer
//     ));
//   } else {
//     const newTrainer = {
//       ...formData,
//       id: Math.max(...trainers.map(t => t.id)) + 1,
//       joinDate: new Date().toISOString().split('T')[0]
//     };
//     setTrainers([...trainers, newTrainer]);
//   }
//   setIsModalOpen(false);
// };

// const handleSpecialtyChange = (specialty) => {
//   setFormData(prev => ({
//     ...prev,
//     specialty: prev.specialty.includes(specialty)
//       ? prev.specialty.filter(s => s !== specialty)
//       : [...prev.specialty, specialty]
//   }));
// };

// const getStatusColor = (status) => {
//   switch (status) {
//     case 'Active': return '#4CAF50';
//     case 'Inactive': return '#757575';
//     case 'On Leave': return '#FF9800';
//     default: return '#757575';
//   }
// };

// if (loading) {
//   return (
//     <div style={{
//       padding: '24px',
//       backgroundColor: '#f5f7fa',
//       minHeight: '100vh',
//       fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
//       display: 'flex',
//       alignItems: 'center',
//       justifyContent: 'center'
//     }}>
//       <div style={{
//         background: 'white',
//         borderRadius: '16px',
//         padding: '48px',
//         boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
//         textAlign: 'center'
//       }}>
//         <div style={{
//           width: '40px',
//           height: '40px',
//           border: '4px solid #f3f3f3',
//           borderTop: '4px solid #667eea',
//           borderRadius: '50%',
//           animation: 'spin 1s linear infinite',
//           margin: '0 auto 16px'
//         }}></div>
//         <p style={{ color: '#7f8c8d', fontSize: '1.1rem' }}>Loading trainers...</p>
//       </div>
//       <style jsx>{`
//         @keyframes spin {
//           0% { transform: rotate(0deg); }
//           100% { transform: rotate(360deg); }
//         }
//       `}</style>
//     </div>
//   );
// }

// if (error) {
//   return (
//     <div style={{
//       padding: '24px',
//       backgroundColor: '#f5f7fa',
//       minHeight: '100vh',
//       fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
//       display: 'flex',
//       alignItems: 'center',
//       justifyContent: 'center'
//     }}>
//       <div style={{
//         background: 'white',
//         borderRadius: '16px',
//         padding: '48px',
//         boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
//         textAlign: 'center',
//         border: '2px solid #ff6b6b'
//       }}>
//         <div style={{
//           width: '48px',
//           height: '48px',
//           background: '#ff6b6b',
//           borderRadius: '50%',
//           display: 'flex',
//           alignItems: 'center',
//           justifyContent: 'center',
//           margin: '0 auto 16px',
//           color: 'white',
//           fontSize: '24px'
//         }}>
//           ⚠
//         </div>
//         <h3 style={{ color: '#2c3e50', marginBottom: '8px' }}>Error Loading Trainers</h3>
//         <p style={{ color: '#7f8c8d', fontSize: '1rem', marginBottom: '20px' }}>{error}</p>
//         <button
//           onClick={fetchTrainers}
//           style={{
//             background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
//             color: 'white',
//             border: 'none',
//             borderRadius: '12px',
//             padding: '12px 24px',
//             fontSize: '1rem',
//             fontWeight: '600',
//             cursor: 'pointer'
//           }}
//         >
//           Retry
//         </button>
//       </div>
//     </div>
//   );
// }

// return (
//   <div style={{
//     padding: '24px',
//     backgroundColor: '#f5f7fa',
//     minHeight: '100vh',
//     fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
//   }}>
//     {/* Header */}
//     <div style={{
//       display: 'flex',
//       justifyContent: 'space-between',
//       alignItems: 'center',
//       marginBottom: '32px'
//     }}>
//       <div>
//         <h1 style={{
//           fontSize: '2.5rem',
//           fontWeight: '700',
//           color: '#2c3e50',
//           margin: '0 0 8px 0'
//         }}>
//           Trainers Overview
//         </h1>
//         <p style={{
//           fontSize: '1rem',
//           color: '#7f8c8d',
//           margin: '0'
//         }}>
//           Manage your fitness center's training staff ({trainers.length} trainers)
//         </p>
//       </div>
//       <button
//         onClick={handleAddTrainer}
//         style={{
//           background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
//           color: 'white',
//           border: 'none',
//           borderRadius: '12px',
//           padding: '12px 24px',
//           fontSize: '1rem',
//           fontWeight: '600',
//           cursor: 'pointer',
//           display: 'flex',
//           alignItems: 'center',
//           gap: '8px',
//           transition: 'all 0.3s ease',
//           boxShadow: '0 4px 16px rgba(102, 126, 234, 0.3)'
//         }}
//         onMouseEnter={(e) => {
//           e.currentTarget.style.transform = 'translateY(-2px)';
//           e.currentTarget.style.boxShadow = '0 8px 24px rgba(102, 126, 234, 0.4)';
//         }}
//         onMouseLeave={(e) => {
//           e.currentTarget.style.transform = 'translateY(0)';
//           e.currentTarget.style.boxShadow = '0 4px 16px rgba(102, 126, 234, 0.3)';
//         }}
//       >
//         <Plus size={20} />
//         Add Trainer
//       </button>
//     </div>

//     {/* Search and Filter Bar */}
//     <div style={{
//       background: 'white',
//       borderRadius: '16px',
//       padding: '24px',
//       marginBottom: '24px',
//       boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
//       display: 'flex',
//       gap: '16px',
//       alignItems: 'center'
//     }}>
//       <div style={{ position: 'relative', flex: 1 }}>
//         <Search size={20} style={{
//           position: 'absolute',
//           left: '16px',
//           top: '50%',
//           transform: 'translateY(-50%)',
//           color: '#7f8c8d'
//         }} />
//         <input
//           type="text"
//           placeholder="Search trainers by name, specialty, or email..."
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//           style={{
//             width: '100%',
//             padding: '12px 16px 12px 48px',
//             border: '2px solid #e9ecef',
//             borderRadius: '12px',
//             fontSize: '1rem',
//             outline: 'none',
//             transition: 'all 0.3s ease'
//           }}
//           onFocus={(e) => {
//             e.currentTarget.style.borderColor = '#667eea';
//             e.currentTarget.style.boxShadow = '0 0 0 3px rgba(102, 126, 234, 0.1)';
//           }}
//           onBlur={(e) => {
//             e.currentTarget.style.borderColor = '#e9ecef';
//             e.currentTarget.style.boxShadow = 'none';
//           }}
//         />
//       </div>
//       <button style={{
//         background: 'transparent',
//         border: '2px solid #e9ecef',
//         borderRadius: '12px',
//         padding: '12px 16px',
//         cursor: 'pointer',
//         display: 'flex',
//         alignItems: 'center',
//         gap: '8px',
//         color: '#6c757d',
//         transition: 'all 0.3s ease'
//       }}>
//         <Filter size={20} />
//         Filter
//       </button>
//     </div>

//     {/* Trainers Table */}
//     <div style={{
//       background: 'white',
//       borderRadius: '16px',
//       overflow: 'hidden',
//       boxShadow: '0 4px 20px rgba(0,0,0,0.08)'
//     }}>
//       {trainers.length === 0 ? (
//         <div style={{
//           padding: '64px',
//           textAlign: 'center',
//           color: '#7f8c8d'
//         }}>
//           <div style={{
//             fontSize: '48px',
//             marginBottom: '16px'
//           }}>👨‍💼</div>
//           <h3 style={{ color: '#2c3e50', marginBottom: '8px' }}>No Trainers Found</h3>
//           <p>Start by adding your first trainer to the system.</p>
//         </div>
//       ) : (
//         <div style={{
//           overflowX: 'auto'
//         }}>
//           <table style={{
//             width: '100%',
//             borderCollapse: 'collapse'
//           }}>
//             <thead>
//               <tr style={{
//                 background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
//                 borderBottom: '2px solid #dee2e6'
//               }}>
//                 <th style={tableHeaderStyle}>Trainer</th>
//                 <th style={tableHeaderStyle}>Contact</th>
//                 <th style={tableHeaderStyle}>Specialties</th>
//                 <th style={tableHeaderStyle}>Rest Period</th>
//                 <th style={tableHeaderStyle}>Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {filteredTrainers.map((trainer, index) => (
//                 <tr key={trainer.id} style={{
//                   borderBottom: '1px solid #f1f3f4',
//                   transition: 'all 0.2s ease'
//                 }}
//                 onMouseEnter={(e) => {
//                   e.currentTarget.style.backgroundColor = '#f8f9fa';
//                 }}
//                 onMouseLeave={(e) => {
//                   e.currentTarget.style.backgroundColor = 'transparent';
//                 }}>
//                   <td style={tableCellStyle}>
//                     <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
//                       <div style={{
//                         width: '48px',
//                         height: '48px',
//                         borderRadius: '50%',
//                         background: `linear-gradient(135deg, ${['#667eea', '#f093fb', '#4facfe', '#43e97b'][index % 4]} 0%, ${['#764ba2', '#f093fb', '#4facfe', '#38f9d7'][index % 4]} 100%)`,
//                         display: 'flex',
//                         alignItems: 'center',
//                         justifyContent: 'center',
//                         color: 'white',
//                         fontWeight: '600',
//                         fontSize: '1.2rem'
//                       }}>
//                         {trainer.name.split(' ').map(n => n[0]).join('')}
//                       </div>
//                       <div>
//                         <div style={{ fontWeight: '600', color: '#2c3e50' }}>{trainer.name}</div>
//                         <div style={{ fontSize: '0.875rem', color: '#7f8c8d' }}>
//                           Joined {new Date(trainer.joinDate).toLocaleDateString()}
//                         </div>
//                       </div>
//                     </div>
//                   </td>
//                   <td style={tableCellStyle}>
//                     <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
//                       <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
//                         <Mail size={14} style={{ color: '#7f8c8d' }} />
//                         <span style={{ fontSize: '0.875rem' }}>{trainer.email}</span>
//                       </div>
//                       <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
//                         <Phone size={14} style={{ color: '#7f8c8d' }} />
//                         <span style={{ fontSize: '0.875rem' }}>{trainer.phone}</span>
//                       </div>
//                     </div>
//                   </td>
//                   <td style={tableCellStyle}>
//                     <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
//                       {trainer.specialty.map((spec, idx) => (
//                         <div key={idx} style={{
//                           background: 'linear-gradient(135deg, #667eea20 0%, #764ba220 100%)',
//                           color: '#667eea',
//                           padding: '4px 8px',
//                           borderRadius: '16px',
//                           fontSize: '0.75rem',
//                           fontWeight: '600',
//                           display: 'inline-flex',
//                           alignItems: 'center',
//                           gap: '4px'
//                         }}>
//                           <Award size={12} />
//                           {spec}
//                         </div>
//                       ))}
//                     </div>
//                   </td>
//                   <td style={tableCellStyle}>
//                     <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
//                       <Clock size={14} style={{ color: '#7f8c8d' }} />
//                       {trainer.rest_period} {trainer.rest_period === 1 ? 'hour' : 'hours'}
//                     </div>
//                   </td>
//                   <td style={tableCellStyle}>
//                     <div style={{ display: 'flex', gap: '8px' }}>
//                       <button
//                         onClick={() => handleEditTrainer(trainer)}
//                         style={{
//                           background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
//                           color: 'white',
//                           border: 'none',
//                           borderRadius: '8px',
//                           padding: '8px',
//                           cursor: 'pointer',
//                           transition: 'all 0.2s ease',
//                           display: 'flex',
//                           alignItems: 'center',
//                           justifyContent: 'center'
//                         }}
//                       >
//                         <Edit3 size={16} />
//                       </button>
//                       <button
//                         onClick={() => handleDeleteTrainer(trainer.id)}
//                         style={{
//                           background: 'linear-gradient(135deg, #ff6b6b 0%, #ee5a52 100%)',
//                           color: 'white',
//                           border: 'none',
//                           borderRadius: '8px',
//                           padding: '8px',
//                           cursor: 'pointer',
//                           transition: 'all 0.2s ease',
//                           display: 'flex',
//                           alignItems: 'center',
//                           justifyContent: 'center'
//                         }}
//                       >
//                         <Trash2 size={16} />
//                       </button>
//                     </div>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       )}
//     </div>

//     {/* Modal */}
//     {isModalOpen && (
//       <div style={{
//         position: 'fixed',
//         top: 0,
//         left: 0,
//         right: 0,
//         bottom: 0,
//         backgroundColor: 'rgba(0,0,0,0.5)',
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'center',
//         zIndex: 1000,
//         backdropFilter: 'blur(4px)'
//       }}>
//         <div style={{
//           background: 'white',
//           borderRadius: '20px',
//           padding: '32px',
//           width: '90%',
//           maxWidth: '700px',
//           maxHeight: '90vh',
//           overflowY: 'auto',
//           boxShadow: '0 20px 60px rgba(0,0,0,0.2)',
//           animation: 'modalSlideIn 0.3s ease-out'
//         }}>
//           <div style={{
//             display: 'flex',
//             justifyContent: 'space-between',
//             alignItems: 'center',
//             marginBottom: '24px'
//           }}>
//             <h2 style={{
//               fontSize: '1.75rem',
//               fontWeight: '700',
//               color: '#2c3e50',
//               margin: 0
//             }}>
//               {editingTrainer ? 'Edit Trainer' : 'Add New Trainer'}
//             </h2>
//             <button
//               onClick={() => setIsModalOpen(false)}
//               style={{
//                 background: 'none',
//                 border: 'none',
//                 cursor: 'pointer',
//                 padding: '8px',
//                 borderRadius: '8px',
//                 color: '#7f8c8d',
//                 transition: 'all 0.2s ease'
//               }}
//             >
//               <X size={24} />
//             </button>
//           </div>

//           <div style={{
//             display: 'grid',
//             gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
//             gap: '20px'
//           }}>
//             <div>
//               <label style={labelStyle}>Name *</label>
//               <input
//                 type="text"
//                 value={formData.name}
//                 onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//                 style={inputStyle}
//                 placeholder="Enter trainer name"
//               />
//             </div>

//             <div>
//               <label style={labelStyle}>Email *</label>
//               <input
//                 type="email"
//                 value={formData.email}
//                 onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//                 style={inputStyle}
//                 placeholder="Enter email address"
//               />
//             </div>

//             <div>
//               <label style={labelStyle}>Phone</label>
//               <input
//                 type="tel"
//                 value={formData.phone}
//                 onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
//                 style={inputStyle}
//                 placeholder="Enter phone number"
//               />
//             </div>

//             <div style={{ gridColumn: '1 / -1' }}>
//               <label style={labelStyle}>Specialties *</label>
//               <div style={{
//                 border: '2px solid #e9ecef',
//                 borderRadius: '12px',
//                 padding: '16px',
//                 backgroundColor: '#fff',
//                 minHeight: '120px'
//               }}>
//                 <div style={{
//                   display: 'grid',
//                   gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
//                   gap: '12px'
//                 }}>
//                   {specialties.map(specialty => (
//                     <label key={specialty} style={{
//                       display: 'flex',
//                       alignItems: 'center',
//                       gap: '8px',
//                       cursor: 'pointer',
//                       padding: '8px 12px',
//                       borderRadius: '8px',
//                       backgroundColor: formData.specialty.includes(specialty) ? '#667eea20' : '#f8f9fa',
//                       border: formData.specialty.includes(specialty) ? '2px solid #667eea' : '2px solid transparent',
//                       transition: 'all 0.2s ease'
//                     }}>
//                       <input
//                         type="checkbox"
//                         checked={formData.specialty.includes(specialty)}
//                         onChange={() => handleSpecialtyChange(specialty)}
//                         style={{
//                           width: '16px',
//                           height: '16px',
//                           accentColor: '#667eea'
//                         }}
//                       />
//                       <span style={{
//                         fontSize: '0.875rem',
//                         fontWeight: '500',
//                         color: formData.specialty.includes(specialty) ? '#667eea' : '#495057'
//                       }}>
//                         {specialty}
//                       </span>
//                     </label>
//                   ))}
//                 </div>
//                 {formData.specialty.length > 0 && (
//                   <div style={{
//                     marginTop: '12px',
//                     paddingTop: '12px',
//                     borderTop: '1px solid #e9ecef'
//                   }}>
//                     <p style={{
//                       fontSize: '0.875rem',
//                       color: '#667eea',
//                       margin: '0 0 8px 0',
//                       fontWeight: '600'
//                     }}>
//                       Selected Specialties ({formData.specialty.length}):
//                     </p>
//                     <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
//                       {formData.specialty.map((spec, idx) => (
//                         <span key={idx} style={{
//                           background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
//                           color: 'white',
//                           padding: '4px 8px',
//                           borderRadius: '16px',
//                           fontSize: '0.75rem',
//                           fontWeight: '600'
//                         }}>
//                           {spec}
//                         </span>
//                       ))}
//                     </div>
//                   </div>
//                 )}
//               </div>
//             </div>

//             <div>
//               <label style={labelStyle}>Rest Period (hours)</label>
//               <input
//                 type="number"
//                 min="0.5"
//                 max="24"
//                 step="0.5"
//                 value={formData.rest_period}
//                 onChange={(e) => setFormData({ ...formData, rest_period: parseFloat(e.target.value) || 1 })}
//                 style={inputStyle}
//                 placeholder="e.g., 1"
//               />
//               <p style={{
//                 fontSize: '0.75rem',
//                 color: '#7f8c8d',
//                 margin: '4px 0 0 0'
//               }}>
//                 Minimum rest period between sessions
//               </p>
//             </div>
//           </div>

//           <div style={{
//             display: 'flex',
//             gap: '12px',
//             justifyContent: 'flex-end',
//             marginTop: '32px'
//           }}>
//             <button
//               onClick={() => setIsModalOpen(false)}
//               style={{
//                 background: 'transparent',
//                 border: '2px solid #e9ecef',
//                 borderRadius: '12px',
//                 padding: '12px 24px',
//                 cursor: 'pointer',
//                 fontSize: '1rem',
//                 fontWeight: '600',
//                 color: '#6c757d',
//                 transition: 'all 0.3s ease'
//               }}
//             >
//               Cancel
//             </button>
//             <button
//               onClick={handleSaveTrainer}
//               style={{
//                 background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
//                 color: 'white',
//                 border: 'none',
//                 borderRadius: '12px',
//                 padding: '12px 24px',
//                 cursor: 'pointer',
//                 fontSize: '1rem',
//                 fontWeight: '600',
//                 display: 'flex',
//                 alignItems: 'center',
//                 gap: '8px',
//                 transition: 'all 0.3s ease'
//               }}
//             >
//               <Save size={18} />
//               {editingTrainer ? 'Update' : 'Save'} Trainer
//             </button>
//           </div>
//         </div>
//       </div>
//     )}

//     <style jsx>{`
//       @keyframes modalSlideIn {
//         from {
//           opacity: 0;
//           transform: translateY(-50px) scale(0.95);
//         }
//         to {
//           opacity: 1;
//           transform: translateY(0) scale(1);
//         }
//       }
//       @keyframes spin {
//         0% { transform: rotate(0deg); }
//         100% { transform: rotate(360deg); }
//       }
//     `}</style>
//   </div>
// );
// };

// const tableHeaderStyle = {
// padding: '16px',
// textAlign: 'left',
// fontWeight: '600',
// color: '#495057',
// fontSize: '0.875rem',
// textTransform: 'uppercase',
// letterSpacing: '0.5px'
// };

// const tableCellStyle = {
// padding: '16px',
// verticalAlign: 'middle',
// fontSize: '0.9rem',
// color: '#495057'
// };

// const labelStyle = {
// display: 'block',
// marginBottom: '8px',
// fontWeight: '600',
// color: '#2c3e50',
// fontSize: '0.875rem'
// };

// const inputStyle = {
// width: '100%',
// padding: '12px 16px',
// border: '2px solid #e9ecef',
// borderRadius: '12px',
// fontSize: '1rem',
// outline: 'none',
// transition: 'all 0.3s ease',
// backgroundColor: '#fff'
// };

// export default TrainersOverview;



// import React, { useState, useEffect } from 'react';
// import {
//   Plus,
//   Edit3,
//   Trash2,
//   Search,
//   Filter,
//   X,
//   Save,
//   Mail,
//   Phone,
//   Calendar,
//   Award,
//   Clock,
//   MapPin
// } from 'lucide-react';

// const TrainersOverview = () => {
//   const [trainers, setTrainers] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [editingTrainer, setEditingTrainer] = useState(null);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     specialty: [],
//     rest_period: 1,
//     password: '',
//   });

//   const specialties = ['HIIT Training', 'Yoga & Pilates', 'Strength Training', 'Cardio & Boxing', 'CrossFit', 'Swimming', 'Dance Fitness'];

//   // Fetch trainers from API
//   const fetchTrainers = async () => {
//     try {
//       setLoading(true);
//       const response = await fetch('https://gympro-backend-i0rv.onrender.com/api/trainers/fetchAll');

//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }

//       const data = await response.json();

//       // Transform API data to match your current component structure
//       const transformedTrainers = data.trainers.map(trainer => ({
//         id: trainer._id,
//         name: trainer.name,
//         email: trainer.email,
//         phone: trainer.phoneNumber,
//         specialty: trainer.skills.length > 0 ? trainer.skills : ['General Training'], // Default if no skills
//         joinDate: trainer.createdAt.split('T')[0], // Convert to YYYY-MM-DD format
//         rest_period: trainer.rest_period
//       }));

//       setTrainers(transformedTrainers);
//       setError(null);
//     } catch (err) {
//       console.error('Error fetching trainers:', err);
//       setError('Failed to fetch trainers. Please check if the backend server is running.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Fetch trainers when component mounts
//   useEffect(() => {
//     fetchTrainers();
//   }, []);

//   const filteredTrainers = trainers.filter(trainer =>
//     trainer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     trainer.specialty.some(spec => spec.toLowerCase().includes(searchTerm.toLowerCase())) ||
//     trainer.email.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   const handleAddTrainer = () => {
//     setEditingTrainer(null);
//     setFormData({
//       name: '',
//       email: '',
//       phone: '',
//       specialty: [],
//       rest_period: 1,
//       password: '',
//     });
//     setIsModalOpen(true);
//   };

//   const handleEditTrainer = (trainer) => {
//     setEditingTrainer(trainer);
//     setFormData({ ...trainer });
//     setIsModalOpen(true);
//   };

//   const handleDeleteTrainer = (id) => {
//     if (window.confirm('Are you sure you want to delete this trainer?')) {
//       setTrainers(trainers.filter(trainer => trainer.id !== id));
//     }
//   };

//   const handleSaveTrainer = async () => {
//     if (!formData.name || !formData.email || !formData.password || formData.specialty.length === 0) {
//       alert('Please fill in all required fields');
//       return;
//     }

//     if (editingTrainer) {
//       // Edit existing trainer (keeping local state update for now)
//       setTrainers(trainers.map(trainer =>
//         trainer.id === editingTrainer.id ? { ...formData, id: editingTrainer.id } : trainer
//       ));
//       setIsModalOpen(false);
//     } else {
//       // Add new trainer via API
//       try {
//         const trainerData = {
//           name: formData.name,
//           email: formData.email,
//           phoneNumber: formData.phone,
//           skills: formData.specialty,
//           rest_period: formData.rest_period,
//           password: formData.password
//         };

//         const response = await fetch('https://gympro-backend-i0rv.onrender.com/api/trainers/register', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify(trainerData)
//         });

//         if (!response.ok) {
//           throw new Error(`HTTP error! status: ${response.status}`);
//         }

//         const result = await response.json();

//         // Refresh the trainers list after successful registration
//         await fetchTrainers();

//         setIsModalOpen(false);
//         alert('Trainer registered successfully!');

//       } catch (error) {
//         console.error('Error registering trainer:', error);
//         alert('Failed to register trainer. Please try again.');
//       }
//     }
//   };

//   const handleSpecialtyChange = (specialty) => {
//     setFormData(prev => ({
//       ...prev,
//       specialty: prev.specialty.includes(specialty)
//         ? prev.specialty.filter(s => s !== specialty)
//         : [...prev.specialty, specialty]
//     }));
//   };

//   const getStatusColor = (status) => {
//     switch (status) {
//       case 'Active': return '#4CAF50';
//       case 'Inactive': return '#757575';
//       case 'On Leave': return '#FF9800';
//       default: return '#757575';
//     }
//   };

//   if (loading) {
//     return (
//       <div style={{
//         padding: '24px',
//         backgroundColor: '#f5f7fa',
//         minHeight: '100vh',
//         fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'center'
//       }}>
//         <div style={{
//           background: 'white',
//           borderRadius: '16px',
//           padding: '48px',
//           boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
//           textAlign: 'center'
//         }}>
//           <div style={{
//             width: '40px',
//             height: '40px',
//             border: '4px solid #f3f3f3',
//             borderTop: '4px solid #667eea',
//             borderRadius: '50%',
//             animation: 'spin 1s linear infinite',
//             margin: '0 auto 16px'
//           }}></div>
//           <p style={{ color: '#7f8c8d', fontSize: '1.1rem' }}>Loading trainers...</p>
//         </div>
//         <style jsx>{`
//         @keyframes spin {
//           0% { transform: rotate(0deg); }
//           100% { transform: rotate(360deg); }
//         }
//       `}</style>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div style={{
//         padding: '24px',
//         backgroundColor: '#f5f7fa',
//         minHeight: '100vh',
//         fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'center'
//       }}>
//         <div style={{
//           background: 'white',
//           borderRadius: '16px',
//           padding: '48px',
//           boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
//           textAlign: 'center',
//           border: '2px solid #ff6b6b'
//         }}>
//           <div style={{
//             width: '48px',
//             height: '48px',
//             background: '#ff6b6b',
//             borderRadius: '50%',
//             display: 'flex',
//             alignItems: 'center',
//             justifyContent: 'center',
//             margin: '0 auto 16px',
//             color: 'white',
//             fontSize: '24px'
//           }}>
//             ⚠
//           </div>
//           <h3 style={{ color: '#2c3e50', marginBottom: '8px' }}>Error Loading Trainers</h3>
//           <p style={{ color: '#7f8c8d', fontSize: '1rem', marginBottom: '20px' }}>{error}</p>
//           <button
//             onClick={fetchTrainers}
//             style={{
//               background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
//               color: 'white',
//               border: 'none',
//               borderRadius: '12px',
//               padding: '12px 24px',
//               fontSize: '1rem',
//               fontWeight: '600',
//               cursor: 'pointer'
//             }}
//           >
//             Retry
//           </button>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div style={{
//       padding: '24px',
//       backgroundColor: '#f5f7fa',
//       minHeight: '100vh',
//       fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
//     }}>
//       {/* Header */}
//       <div style={{
//         display: 'flex',
//         justifyContent: 'space-between',
//         alignItems: 'center',
//         marginBottom: '32px'
//       }}>
//         <div>
//           <h1 style={{
//             fontSize: '2.5rem',
//             fontWeight: '700',
//             color: '#2c3e50',
//             margin: '0 0 8px 0'
//           }}>
//             Trainers Overview
//           </h1>
//           <p style={{
//             fontSize: '1rem',
//             color: '#7f8c8d',
//             margin: '0'
//           }}>
//             Manage your fitness center's training staff ({trainers.length} trainers)
//           </p>
//         </div>
//         <button
//           onClick={handleAddTrainer}
//           style={{
//             background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
//             color: 'white',
//             border: 'none',
//             borderRadius: '12px',
//             padding: '12px 24px',
//             fontSize: '1rem',
//             fontWeight: '600',
//             cursor: 'pointer',
//             display: 'flex',
//             alignItems: 'center',
//             gap: '8px',
//             transition: 'all 0.3s ease',
//             boxShadow: '0 4px 16px rgba(102, 126, 234, 0.3)'
//           }}
//           onMouseEnter={(e) => {
//             e.currentTarget.style.transform = 'translateY(-2px)';
//             e.currentTarget.style.boxShadow = '0 8px 24px rgba(102, 126, 234, 0.4)';
//           }}
//           onMouseLeave={(e) => {
//             e.currentTarget.style.transform = 'translateY(0)';
//             e.currentTarget.style.boxShadow = '0 4px 16px rgba(102, 126, 234, 0.3)';
//           }}
//         >
//           <Plus size={20} />
//           Add Trainer
//         </button>
//       </div>

//       {/* Search and Filter Bar */}
//       <div style={{
//         background: 'white',
//         borderRadius: '16px',
//         padding: '24px',
//         marginBottom: '24px',
//         boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
//         display: 'flex',
//         gap: '16px',
//         alignItems: 'center'
//       }}>
//         <div style={{ position: 'relative', flex: 1 }}>
//           <Search size={20} style={{
//             position: 'absolute',
//             left: '16px',
//             top: '50%',
//             transform: 'translateY(-50%)',
//             color: '#7f8c8d'
//           }} />
//           <input
//             type="text"
//             placeholder="Search trainers by name, specialty, or email..."
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//             style={{
//               width: '100%',
//               padding: '12px 16px 12px 48px',
//               border: '2px solid #e9ecef',
//               borderRadius: '12px',
//               fontSize: '1rem',
//               outline: 'none',
//               transition: 'all 0.3s ease'
//             }}
//             onFocus={(e) => {
//               e.currentTarget.style.borderColor = '#667eea';
//               e.currentTarget.style.boxShadow = '0 0 0 3px rgba(102, 126, 234, 0.1)';
//             }}
//             onBlur={(e) => {
//               e.currentTarget.style.borderColor = '#e9ecef';
//               e.currentTarget.style.boxShadow = 'none';
//             }}
//           />
//         </div>
//         <button style={{
//           background: 'transparent',
//           border: '2px solid #e9ecef',
//           borderRadius: '12px',
//           padding: '12px 16px',
//           cursor: 'pointer',
//           display: 'flex',
//           alignItems: 'center',
//           gap: '8px',
//           color: '#6c757d',
//           transition: 'all 0.3s ease'
//         }}>
//           <Filter size={20} />
//           Filter
//         </button>
//       </div>

//       {/* Trainers Table */}
//       <div style={{
//         background: 'white',
//         borderRadius: '16px',
//         overflow: 'hidden',
//         boxShadow: '0 4px 20px rgba(0,0,0,0.08)'
//       }}>
//         {trainers.length === 0 ? (
//           <div style={{
//             padding: '64px',
//             textAlign: 'center',
//             color: '#7f8c8d'
//           }}>
//             <div style={{
//               fontSize: '48px',
//               marginBottom: '16px'
//             }}>👨‍💼</div>
//             <h3 style={{ color: '#2c3e50', marginBottom: '8px' }}>No Trainers Found</h3>
//             <p>Start by adding your first trainer to the system.</p>
//           </div>
//         ) : (
//           <div style={{
//             overflowX: 'auto'
//           }}>
//             <table style={{
//               width: '100%',
//               borderCollapse: 'collapse'
//             }}>
//               <thead>
//                 <tr style={{
//                   background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
//                   borderBottom: '2px solid #dee2e6'
//                 }}>
//                   <th style={tableHeaderStyle}>Trainer</th>
//                   <th style={tableHeaderStyle}>Contact</th>
//                   <th style={tableHeaderStyle}>Specialties</th>
//                   <th style={tableHeaderStyle}>Rest Period</th>
//                   <th style={tableHeaderStyle}>Actions</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {filteredTrainers.map((trainer, index) => (
//                   <tr key={trainer.id} style={{
//                     borderBottom: '1px solid #f1f3f4',
//                     transition: 'all 0.2s ease'
//                   }}
//                     onMouseEnter={(e) => {
//                       e.currentTarget.style.backgroundColor = '#f8f9fa';
//                     }}
//                     onMouseLeave={(e) => {
//                       e.currentTarget.style.backgroundColor = 'transparent';
//                     }}>
//                     <td style={tableCellStyle}>
//                       <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
//                         <div style={{
//                           width: '48px',
//                           height: '48px',
//                           borderRadius: '50%',
//                           background: `linear-gradient(135deg, ${['#667eea', '#f093fb', '#4facfe', '#43e97b'][index % 4]} 0%, ${['#764ba2', '#f093fb', '#4facfe', '#38f9d7'][index % 4]} 100%)`,
//                           display: 'flex',
//                           alignItems: 'center',
//                           justifyContent: 'center',
//                           color: 'white',
//                           fontWeight: '600',
//                           fontSize: '1.2rem'
//                         }}>
//                           {trainer.name.split(' ').map(n => n[0]).join('')}
//                         </div>
//                         <div>
//                           <div style={{ fontWeight: '600', color: '#2c3e50' }}>{trainer.name}</div>
//                           <div style={{ fontSize: '0.875rem', color: '#7f8c8d' }}>
//                             Joined {new Date(trainer.joinDate).toLocaleDateString()}
//                           </div>
//                         </div>
//                       </div>
//                     </td>
//                     <td style={tableCellStyle}>
//                       <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
//                         <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
//                           <Mail size={14} style={{ color: '#7f8c8d' }} />
//                           <span style={{ fontSize: '0.875rem' }}>{trainer.email}</span>
//                         </div>
//                         <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
//                           <Phone size={14} style={{ color: '#7f8c8d' }} />
//                           <span style={{ fontSize: '0.875rem' }}>{trainer.phone}</span>
//                         </div>
//                       </div>
//                     </td>
//                     <td style={tableCellStyle}>
//                       <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
//                         {trainer.specialty.map((spec, idx) => (
//                           <div key={idx} style={{
//                             background: 'linear-gradient(135deg, #667eea20 0%, #764ba220 100%)',
//                             color: '#667eea',
//                             padding: '4px 8px',
//                             borderRadius: '16px',
//                             fontSize: '0.75rem',
//                             fontWeight: '600',
//                             display: 'inline-flex',
//                             alignItems: 'center',
//                             gap: '4px'
//                           }}>
//                             <Award size={12} />
//                             {spec}
//                           </div>
//                         ))}
//                       </div>
//                     </td>
//                     <td style={tableCellStyle}>
//                       <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
//                         <Clock size={14} style={{ color: '#7f8c8d' }} />
//                         {trainer.rest_period} {trainer.rest_period === 1 ? 'hour' : 'hours'}
//                       </div>
//                     </td>
//                     <td style={tableCellStyle}>
//                       <div style={{ display: 'flex', gap: '8px' }}>
//                         <button
//                           onClick={() => handleEditTrainer(trainer)}
//                           style={{
//                             background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
//                             color: 'white',
//                             border: 'none',
//                             borderRadius: '8px',
//                             padding: '8px',
//                             cursor: 'pointer',
//                             transition: 'all 0.2s ease',
//                             display: 'flex',
//                             alignItems: 'center',
//                             justifyContent: 'center'
//                           }}
//                         >
//                           <Edit3 size={16} />
//                         </button>
//                         <button
//                           onClick={() => handleDeleteTrainer(trainer.id)}
//                           style={{
//                             background: 'linear-gradient(135deg, #ff6b6b 0%, #ee5a52 100%)',
//                             color: 'white',
//                             border: 'none',
//                             borderRadius: '8px',
//                             padding: '8px',
//                             cursor: 'pointer',
//                             transition: 'all 0.2s ease',
//                             display: 'flex',
//                             alignItems: 'center',
//                             justifyContent: 'center'
//                           }}
//                         >
//                           <Trash2 size={16} />
//                         </button>
//                       </div>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         )}
//       </div>

//       {/* Modal */}
//       {isModalOpen && (
//         <div style={{
//           position: 'fixed',
//           top: 0,
//           left: 0,
//           right: 0,
//           bottom: 0,
//           backgroundColor: 'rgba(0,0,0,0.5)',
//           display: 'flex',
//           alignItems: 'center',
//           justifyContent: 'center',
//           zIndex: 1000,
//           backdropFilter: 'blur(4px)'
//         }}>
//           <div style={{
//             background: 'white',
//             borderRadius: '20px',
//             padding: '32px',
//             width: '90%',
//             maxWidth: '700px',
//             maxHeight: '90vh',
//             overflowY: 'auto',
//             boxShadow: '0 20px 60px rgba(0,0,0,0.2)',
//             animation: 'modalSlideIn 0.3s ease-out'
//           }}>
//             <div style={{
//               display: 'flex',
//               justifyContent: 'space-between',
//               alignItems: 'center',
//               marginBottom: '24px'
//             }}>
//               <h2 style={{
//                 fontSize: '1.75rem',
//                 fontWeight: '700',
//                 color: '#2c3e50',
//                 margin: 0
//               }}>
//                 {editingTrainer ? 'Edit Trainer' : 'Add New Trainer'}
//               </h2>
//               <button
//                 onClick={() => setIsModalOpen(false)}
//                 style={{
//                   background: 'none',
//                   border: 'none',
//                   cursor: 'pointer',
//                   padding: '8px',
//                   borderRadius: '8px',
//                   color: '#7f8c8d',
//                   transition: 'all 0.2s ease'
//                 }}
//               >
//                 <X size={24} />
//               </button>
//             </div>

//             <div style={{
//               display: 'grid',
//               gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
//               gap: '20px'
//             }}>
//               <div>
//                 <label style={labelStyle}>Name *</label>
//                 <input
//                   type="text"
//                   value={formData.name}
//                   onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//                   style={inputStyle}
//                   placeholder="Enter trainer name"
//                 />
//               </div>

//               <div>
//                 <label style={labelStyle}>Email *</label>
//                 <input
//                   type="email"
//                   value={formData.email}
//                   onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//                   style={inputStyle}
//                   placeholder="Enter email address"
//                 />
//               </div>

//               <div>
//                 <label style={labelStyle}>Phone</label>
//                 <input
//                   type="tel"
//                   value={formData.phone}
//                   onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
//                   style={inputStyle}
//                   placeholder="Enter phone number"
//                 />
//               </div>

//               <div>
//                 <label style={labelStyle}>Password *</label>
//                 <input
//                   type="password"
//                   value={formData.password}
//                   onChange={(e) => setFormData({ ...formData, password: e.target.value })}
//                   style={inputStyle}
//                   placeholder="Enter password"
//                 />
//               </div>

//               <div style={{ gridColumn: '1 / -1' }}>
//                 <label style={labelStyle}>Specialties *</label>
//                 <div style={{
//                   border: '2px solid #e9ecef',
//                   borderRadius: '12px',
//                   padding: '16px',
//                   backgroundColor: '#fff',
//                   minHeight: '120px'
//                 }}>
//                   <div style={{
//                     display: 'grid',
//                     gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
//                     gap: '12px'
//                   }}>
//                     {specialties.map(specialty => (
//                       <label key={specialty} style={{
//                         display: 'flex',
//                         alignItems: 'center',
//                         gap: '8px',
//                         cursor: 'pointer',
//                         padding: '8px 12px',
//                         borderRadius: '8px',
//                         backgroundColor: formData.specialty.includes(specialty) ? '#667eea20' : '#f8f9fa',
//                         border: formData.specialty.includes(specialty) ? '2px solid #667eea' : '2px solid transparent',
//                         transition: 'all 0.2s ease'
//                       }}>
//                         <input
//                           type="checkbox"
//                           checked={formData.specialty.includes(specialty)}
//                           onChange={() => handleSpecialtyChange(specialty)}
//                           style={{
//                             width: '16px',
//                             height: '16px',
//                             accentColor: '#667eea'
//                           }}
//                         />
//                         <span style={{
//                           fontSize: '0.875rem',
//                           fontWeight: '500',
//                           color: formData.specialty.includes(specialty) ? '#667eea' : '#495057'
//                         }}>
//                           {specialty}
//                         </span>
//                       </label>
//                     ))}
//                   </div>
//                   {formData.specialty.length > 0 && (
//                     <div style={{
//                       marginTop: '12px',
//                       paddingTop: '12px',
//                       borderTop: '1px solid #e9ecef'
//                     }}>
//                       <p style={{
//                         fontSize: '0.875rem',
//                         color: '#667eea',
//                         margin: '0 0 8px 0',
//                         fontWeight: '600'
//                       }}>
//                         Selected Specialties ({formData.specialty.length}):
//                       </p>
//                       <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
//                         {formData.specialty.map((spec, idx) => (
//                           <span key={idx} style={{
//                             background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
//                             color: 'white',
//                             padding: '4px 8px',
//                             borderRadius: '16px',
//                             fontSize: '0.75rem',
//                             fontWeight: '600'
//                           }}>
//                             {spec}
//                           </span>
//                         ))}
//                       </div>
//                     </div>
//                   )}
//                 </div>
//               </div>

//               <div>
//                 <label style={labelStyle}>Rest Period (hours)</label>
//                 <input
//                   type="number"
//                   min="0.5"
//                   max="24"
//                   step="0.5"
//                   value={formData.rest_period}
//                   onChange={(e) => setFormData({ ...formData, rest_period: parseFloat(e.target.value) || 1 })}
//                   style={inputStyle}
//                   placeholder="e.g., 1"
//                 />
//                 <p style={{
//                   fontSize: '0.75rem',
//                   color: '#7f8c8d',
//                   margin: '4px 0 0 0'
//                 }}>
//                   Minimum rest period between sessions
//                 </p>
//               </div>
//             </div>

//             <div style={{
//               display: 'flex',
//               gap: '12px',
//               justifyContent: 'flex-end',
//               marginTop: '32px'
//             }}>
//               <button
//                 onClick={() => setIsModalOpen(false)}
//                 style={{
//                   background: 'transparent',
//                   border: '2px solid #e9ecef',
//                   borderRadius: '12px',
//                   padding: '12px 24px',
//                   cursor: 'pointer',
//                   fontSize: '1rem',
//                   fontWeight: '600',
//                   color: '#6c757d',
//                   transition: 'all 0.3s ease'
//                 }}
//               >
//                 Cancel
//               </button>
//               <button
//                 onClick={handleSaveTrainer}
//                 style={{
//                   background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
//                   color: 'white',
//                   border: 'none',
//                   borderRadius: '12px',
//                   padding: '12px 24px',
//                   cursor: 'pointer',
//                   fontSize: '1rem',
//                   fontWeight: '600',
//                   display: 'flex',
//                   alignItems: 'center',
//                   gap: '8px',
//                   transition: 'all 0.3s ease'
//                 }}
//               >
//                 <Save size={18} />
//                 {editingTrainer ? 'Update' : 'Save'} Trainer
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       <style jsx>{`
//       @keyframes modalSlideIn {
//         from {
//           opacity: 0;
//           transform: translateY(-50px) scale(0.95);
//         }
//         to {
//           opacity: 1;
//           transform: translateY(0) scale(1);
//         }
//       }
//       @keyframes spin {
//         0% { transform: rotate(0deg); }
//         100% { transform: rotate(360deg); }
//       }
//     `}</style>
//     </div>
//   );
// };

// const tableHeaderStyle = {
//   padding: '16px',
//   textAlign: 'left',
//   fontWeight: '600',
//   color: '#495057',
//   fontSize: '0.875rem',
//   textTransform: 'uppercase',
//   letterSpacing: '0.5px'
// };

// const tableCellStyle = {
//   padding: '16px',
//   verticalAlign: 'middle',
//   fontSize: '0.9rem',
//   color: '#495057'
// };

// const labelStyle = {
//   display: 'block',
//   marginBottom: '8px',
//   fontWeight: '600',
//   color: '#2c3e50',
//   fontSize: '0.875rem'
// };

// const inputStyle = {
//   width: '100%',
//   padding: '12px 16px',
//   border: '2px solid #e9ecef',
//   borderRadius: '12px',
//   fontSize: '1rem',
//   outline: 'none',
//   transition: 'all 0.3s ease',
//   backgroundColor: '#fff'
// };

// export default TrainersOverview;




import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Plus,
  Edit3,
  Trash2,
  Search,
  Filter,
  X,
  Save,
  Mail,
  Phone,
  Calendar,
  Award,
  Clock,
  MapPin
} from 'lucide-react';

const TrainersOverview = () => {
  const [trainers, setTrainers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingTrainer, setEditingTrainer] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    specialty: [],
    rest_period: 1,
    password: '',
  });

  const specialties = ['HIIT Training', 'Yoga & Pilates', 'Strength Training', 'Cardio & Boxing', 'CrossFit', 'Swimming', 'Dance Fitness'];

  // Fetch trainers from API
  const fetchTrainers = async () => {
    try {
      setLoading(true);
      const response = await fetch('https://gympro-backend-i0rv.onrender.com/api/trainers/fetchAll');

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      // Transform API data to match your current component structure
      const transformedTrainers = data.trainers.map(trainer => ({
        id: trainer._id,
        name: trainer.name,
        email: trainer.email,
        phone: trainer.phoneNumber,
        specialty: trainer.skills.length > 0 ? trainer.skills : ['General Training'], // Default if no skills
        joinDate: trainer.createdAt.split('T')[0], // Convert to YYYY-MM-DD format
        rest_period: trainer.rest_period
      }));

      setTrainers(transformedTrainers);
      setError(null);
    } catch (err) {
      console.error('Error fetching trainers:', err);
      setError('Failed to fetch trainers. Please check if the backend server is running.');
    } finally {
      setLoading(false);
    }
  };

  // Fetch trainers when component mounts
  useEffect(() => {
    fetchTrainers();
  }, []);

  const filteredTrainers = trainers.filter(trainer =>
    trainer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    trainer.specialty.some(spec => spec.toLowerCase().includes(searchTerm.toLowerCase())) ||
    trainer.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddTrainer = () => {
    setEditingTrainer(null);
    setFormData({
      name: '',
      email: '',
      phone: '',
      specialty: [],
      rest_period: 1,
      password: '',
    });
    setIsModalOpen(true);
  };

  const handleEditTrainer = (trainer) => {
    setEditingTrainer(trainer);
    setFormData({ ...trainer });
    setIsModalOpen(true);
  };

  const handleDeleteTrainer = async (id) => {
    if (window.confirm('Are you sure you want to delete this trainer?')) {
      try {
        await axios.delete(`https://gympro-backend-i0rv.onrender.com/api/trainers/${id}`);
        
        // Refresh the trainers list after successful deletion
        await fetchTrainers();
        alert('Trainer deleted successfully!');
      } catch (error) {
        console.error('Error deleting trainer:', error);
        alert('Failed to delete trainer. Please try again.');
      }
    }
  };

  const handleSaveTrainer = async () => {
    if (!formData.name || !formData.email || formData.specialty.length === 0) {
      alert('Please fill in all required fields');
      return;
    }

    if (editingTrainer) {
      // Update existing trainer via API
      try {
        const trainerData = {
          name: formData.name,
          email: formData.email,
          phoneNumber: formData.phone,
          skills: formData.specialty,
          rest_period: formData.rest_period,
        };

        await axios.put(`https://gympro-backend-i0rv.onrender.com/api/trainers/${editingTrainer.id}`, trainerData);

        // Refresh the trainers list after successful update
        await fetchTrainers();

        setIsModalOpen(false);
        alert('Trainer updated successfully!');

      } catch (error) {
        console.error('Error updating trainer:', error);
        alert('Failed to update trainer. Please try again.');
      }
    } else {
      // Add new trainer via API
      try {
        const trainerData = {
          name: formData.name,
          email: formData.email,
          phoneNumber: formData.phone,
          skills: formData.specialty,
          rest_period: formData.rest_period,
          password: formData.password
        };

        const response = await fetch('https://gympro-backend-i0rv.onrender.com/api/trainers/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(trainerData)
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();

        // Refresh the trainers list after successful registration
        await fetchTrainers();

        setIsModalOpen(false);
        alert('Trainer registered successfully!');

      } catch (error) {
        console.error('Error registering trainer:', error);
        alert('Failed to register trainer. Please try again.');
      }
    }
  };

  const handleSpecialtyChange = (specialty) => {
    setFormData(prev => ({
      ...prev,
      specialty: prev.specialty.includes(specialty)
        ? prev.specialty.filter(s => s !== specialty)
        : [...prev.specialty, specialty]
    }));
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Active': return '#4CAF50';
      case 'Inactive': return '#757575';
      case 'On Leave': return '#FF9800';
      default: return '#757575';
    }
  };

  if (loading) {
    return (
      <div style={{
        padding: '24px',
        backgroundColor: '#f5f7fa',
        minHeight: '100vh',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <div style={{
          background: 'white',
          borderRadius: '16px',
          padding: '48px',
          boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
          textAlign: 'center'
        }}>
          <div style={{
            width: '40px',
            height: '40px',
            border: '4px solid #f3f3f3',
            borderTop: '4px solid #667eea',
            borderRadius: '50%',
            animation: 'spin 1s linear infinite',
            margin: '0 auto 16px'
          }}></div>
          <p style={{ color: '#7f8c8d', fontSize: '1.1rem' }}>Loading trainers...</p>
        </div>
        <style jsx>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
      </div>
    );
  }

  if (error) {
    return (
      <div style={{
        padding: '24px',
        backgroundColor: '#f5f7fa',
        minHeight: '100vh',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <div style={{
          background: 'white',
          borderRadius: '16px',
          padding: '48px',
          boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
          textAlign: 'center',
          border: '2px solid #ff6b6b'
        }}>
          <div style={{
            width: '48px',
            height: '48px',
            background: '#ff6b6b',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 16px',
            color: 'white',
            fontSize: '24px'
          }}>
            ⚠
          </div>
          <h3 style={{ color: '#2c3e50', marginBottom: '8px' }}>Error Loading Trainers</h3>
          <p style={{ color: '#7f8c8d', fontSize: '1rem', marginBottom: '20px' }}>{error}</p>
          <button
            onClick={fetchTrainers}
            style={{
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              color: 'white',
              border: 'none',
              borderRadius: '12px',
              padding: '12px 24px',
              fontSize: '1rem',
              fontWeight: '600',
              cursor: 'pointer'
            }}
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div style={{
      padding: '24px',
      backgroundColor: '#f5f7fa',
      minHeight: '100vh',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    }}>
      {/* Header */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '32px'
      }}>
        <div>
          <h1 style={{
            fontSize: '2.5rem',
            fontWeight: '700',
            color: '#2c3e50',
            margin: '0 0 8px 0'
          }}>
            Trainers Overview
          </h1>
          <p style={{
            fontSize: '1rem',
            color: '#7f8c8d',
            margin: '0'
          }}>
            Manage your fitness center's training staff ({trainers.length} trainers)
          </p>
        </div>
        <button
          onClick={handleAddTrainer}
          style={{
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            color: 'white',
            border: 'none',
            borderRadius: '12px',
            padding: '12px 24px',
            fontSize: '1rem',
            fontWeight: '600',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            transition: 'all 0.3s ease',
            boxShadow: '0 4px 16px rgba(102, 126, 234, 0.3)'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow = '0 8px 24px rgba(102, 126, 234, 0.4)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 4px 16px rgba(102, 126, 234, 0.3)';
          }}
        >
          <Plus size={20} />
          Add Trainer
        </button>
      </div>

      {/* Search and Filter Bar */}
      <div style={{
        background: 'white',
        borderRadius: '16px',
        padding: '24px',
        marginBottom: '24px',
        boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
        display: 'flex',
        gap: '16px',
        alignItems: 'center'
      }}>
        <div style={{ position: 'relative', flex: 1 }}>
          <Search size={20} style={{
            position: 'absolute',
            left: '16px',
            top: '50%',
            transform: 'translateY(-50%)',
            color: '#7f8c8d'
          }} />
          <input
            type="text"
            placeholder="Search trainers by name, specialty, or email..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              width: '100%',
              padding: '12px 16px 12px 48px',
              border: '2px solid #e9ecef',
              borderRadius: '12px',
              fontSize: '1rem',
              outline: 'none',
              transition: 'all 0.3s ease'
            }}
            onFocus={(e) => {
              e.currentTarget.style.borderColor = '#667eea';
              e.currentTarget.style.boxShadow = '0 0 0 3px rgba(102, 126, 234, 0.1)';
            }}
            onBlur={(e) => {
              e.currentTarget.style.borderColor = '#e9ecef';
              e.currentTarget.style.boxShadow = 'none';
            }}
          />
        </div>
        <button style={{
          background: 'transparent',
          border: '2px solid #e9ecef',
          borderRadius: '12px',
          padding: '12px 16px',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          color: '#6c757d',
          transition: 'all 0.3s ease'
        }}>
          <Filter size={20} />
          Filter
        </button>
      </div>

      {/* Trainers Table */}
      <div style={{
        background: 'white',
        borderRadius: '16px',
        overflow: 'hidden',
        boxShadow: '0 4px 20px rgba(0,0,0,0.08)'
      }}>
        {trainers.length === 0 ? (
          <div style={{
            padding: '64px',
            textAlign: 'center',
            color: '#7f8c8d'
          }}>
            <div style={{
              fontSize: '48px',
              marginBottom: '16px'
            }}>👨‍💼</div>
            <h3 style={{ color: '#2c3e50', marginBottom: '8px' }}>No Trainers Found</h3>
            <p>Start by adding your first trainer to the system.</p>
          </div>
        ) : (
          <div style={{
            overflowX: 'auto'
          }}>
            <table style={{
              width: '100%',
              borderCollapse: 'collapse'
            }}>
              <thead>
                <tr style={{
                  background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
                  borderBottom: '2px solid #dee2e6'
                }}>
                  <th style={tableHeaderStyle}>Trainer</th>
                  <th style={tableHeaderStyle}>Contact</th>
                  <th style={tableHeaderStyle}>Specialties</th>
                  <th style={tableHeaderStyle}>Rest Period</th>
                  <th style={tableHeaderStyle}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredTrainers.map((trainer, index) => (
                  <tr key={trainer.id} style={{
                    borderBottom: '1px solid #f1f3f4',
                    transition: 'all 0.2s ease'
                  }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#f8f9fa';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'transparent';
                    }}>
                    <td style={tableCellStyle}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <div style={{
                          width: '48px',
                          height: '48px',
                          borderRadius: '50%',
                          background: `linear-gradient(135deg, ${['#667eea', '#f093fb', '#4facfe', '#43e97b'][index % 4]} 0%, ${['#764ba2', '#f093fb', '#4facfe', '#38f9d7'][index % 4]} 100%)`,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: 'white',
                          fontWeight: '600',
                          fontSize: '1.2rem'
                        }}>
                          {trainer.name.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div>
                          <div style={{ fontWeight: '600', color: '#2c3e50' }}>{trainer.name}</div>
                          <div style={{ fontSize: '0.875rem', color: '#7f8c8d' }}>
                            Joined {new Date(trainer.joinDate).toLocaleDateString()}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td style={tableCellStyle}>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <Mail size={14} style={{ color: '#7f8c8d' }} />
                          <span style={{ fontSize: '0.875rem' }}>{trainer.email}</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <Phone size={14} style={{ color: '#7f8c8d' }} />
                          <span style={{ fontSize: '0.875rem' }}>{trainer.phone}</span>
                        </div>
                      </div>
                    </td>
                    <td style={tableCellStyle}>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
                        {trainer.specialty.map((spec, idx) => (
                          <div key={idx} style={{
                            background: 'linear-gradient(135deg, #667eea20 0%, #764ba220 100%)',
                            color: '#667eea',
                            padding: '4px 8px',
                            borderRadius: '16px',
                            fontSize: '0.75rem',
                            fontWeight: '600',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '4px'
                          }}>
                            <Award size={12} />
                            {spec}
                          </div>
                        ))}
                      </div>
                    </td>
                    <td style={tableCellStyle}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <Clock size={14} style={{ color: '#7f8c8d' }} />
                        {trainer.rest_period} {trainer.rest_period === 1 ? 'hour' : 'hours'}
                      </div>
                    </td>
                    <td style={tableCellStyle}>
                      <div style={{ display: 'flex', gap: '8px' }}>
                        <button
                          onClick={() => handleEditTrainer(trainer)}
                          style={{
                            background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
                            color: 'white',
                            border: 'none',
                            borderRadius: '8px',
                            padding: '8px',
                            cursor: 'pointer',
                            transition: 'all 0.2s ease',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                          }}
                        >
                          <Edit3 size={16} />
                        </button>
                        <button
                          onClick={() => handleDeleteTrainer(trainer.id)}
                          style={{
                            background: 'linear-gradient(135deg, #ff6b6b 0%, #ee5a52 100%)',
                            color: 'white',
                            border: 'none',
                            borderRadius: '8px',
                            padding: '8px',
                            cursor: 'pointer',
                            transition: 'all 0.2s ease',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                          }}
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0,0,0,0.5)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000,
          backdropFilter: 'blur(4px)'
        }}>
          <div style={{
            background: 'white',
            borderRadius: '20px',
            padding: '32px',
            width: '90%',
            maxWidth: '700px',
            maxHeight: '90vh',
            overflowY: 'auto',
            boxShadow: '0 20px 60px rgba(0,0,0,0.2)',
            animation: 'modalSlideIn 0.3s ease-out'
          }}>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '24px'
            }}>
              <h2 style={{
                fontSize: '1.75rem',
                fontWeight: '700',
                color: '#2c3e50',
                margin: 0
              }}>
                {editingTrainer ? 'Edit Trainer' : 'Add New Trainer'}
              </h2>
              <button
                onClick={() => setIsModalOpen(false)}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: '8px',
                  borderRadius: '8px',
                  color: '#7f8c8d',
                  transition: 'all 0.2s ease'
                }}
              >
                <X size={24} />
              </button>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '20px'
            }}>
              <div>
                <label style={labelStyle}>Name *</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  style={inputStyle}
                  placeholder="Enter trainer name"
                />
              </div>

              <div>
                <label style={labelStyle}>Email *</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  style={inputStyle}
                  placeholder="Enter email address"
                />
              </div>

              <div>
                <label style={labelStyle}>Phone</label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  style={inputStyle}
                  placeholder="Enter phone number"
                />
              </div>

              <div>
                <label style={labelStyle}>Password *</label>
                <input
                  type="password"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  style={inputStyle}
                  placeholder="Enter password"
                />
              </div>

              <div style={{ gridColumn: '1 / -1' }}>
                <label style={labelStyle}>Specialties *</label>
                <div style={{
                  border: '2px solid #e9ecef',
                  borderRadius: '12px',
                  padding: '16px',
                  backgroundColor: '#fff',
                  minHeight: '120px'
                }}>
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                    gap: '12px'
                  }}>
                    {specialties.map(specialty => (
                      <label key={specialty} style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        cursor: 'pointer',
                        padding: '8px 12px',
                        borderRadius: '8px',
                        backgroundColor: formData.specialty.includes(specialty) ? '#667eea20' : '#f8f9fa',
                        border: formData.specialty.includes(specialty) ? '2px solid #667eea' : '2px solid transparent',
                        transition: 'all 0.2s ease'
                      }}>
                        <input
                          type="checkbox"
                          checked={formData.specialty.includes(specialty)}
                          onChange={() => handleSpecialtyChange(specialty)}
                          style={{
                            width: '16px',
                            height: '16px',
                            accentColor: '#667eea'
                          }}
                        />
                        <span style={{
                          fontSize: '0.875rem',
                          fontWeight: '500',
                          color: formData.specialty.includes(specialty) ? '#667eea' : '#495057'
                        }}>
                          {specialty}
                        </span>
                      </label>
                    ))}
                  </div>
                  {formData.specialty.length > 0 && (
                    <div style={{
                      marginTop: '12px',
                      paddingTop: '12px',
                      borderTop: '1px solid #e9ecef'
                    }}>
                      <p style={{
                        fontSize: '0.875rem',
                        color: '#667eea',
                        margin: '0 0 8px 0',
                        fontWeight: '600'
                      }}>
                        Selected Specialties ({formData.specialty.length}):
                      </p>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                        {formData.specialty.map((spec, idx) => (
                          <span key={idx} style={{
                            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                            color: 'white',
                            padding: '4px 8px',
                            borderRadius: '16px',
                            fontSize: '0.75rem',
                            fontWeight: '600'
                          }}>
                            {spec}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div>
                <label style={labelStyle}>Rest Period (hours)</label>
                <input
                  type="number"
                  min="0.5"
                  max="24"
                  step="0.5"
                  value={formData.rest_period}
                  onChange={(e) => setFormData({ ...formData, rest_period: parseFloat(e.target.value) || 1 })}
                  style={inputStyle}
                  placeholder="e.g., 1"
                />
                <p style={{
                  fontSize: '0.75rem',
                  color: '#7f8c8d',
                  margin: '4px 0 0 0'
                }}>
                  Minimum rest period between sessions
                </p>
              </div>
            </div>

            <div style={{
              display: 'flex',
              gap: '12px',
              justifyContent: 'flex-end',
              marginTop: '32px'
            }}>
              <button
                onClick={() => setIsModalOpen(false)}
                style={{
                  background: 'transparent',
                  border: '2px solid #e9ecef',
                  borderRadius: '12px',
                  padding: '12px 24px',
                  cursor: 'pointer',
                  fontSize: '1rem',
                  fontWeight: '600',
                  color: '#6c757d',
                  transition: 'all 0.3s ease'
                }}
              >
                Cancel
              </button>
              <button
                onClick={handleSaveTrainer}
                style={{
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  color: 'white',
                  border: 'none',
                  borderRadius: '12px',
                  padding: '12px 24px',
                  cursor: 'pointer',
                  fontSize: '1rem',
                  fontWeight: '600',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  transition: 'all 0.3s ease'
                }}
              >
                <Save size={18} />
                {editingTrainer ? 'Update' : 'Save'} Trainer
              </button>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
      @keyframes modalSlideIn {
        from {
          opacity: 0;
          transform: translateY(-50px) scale(0.95);
        }
        to {
          opacity: 1;
          transform: translateY(0) scale(1);
        }
      }
      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
    `}</style>
    </div>
  );
};

const tableHeaderStyle = {
    padding: '16px',
    textAlign: 'left',
    fontWeight: '600',
    color: '#495057',
    fontSize: '0.875rem',
    textTransform: 'uppercase',
    letterSpacing: '0.5px'
  };
  
  const tableCellStyle = {
    padding: '16px',
    verticalAlign: 'middle',
    fontSize: '0.9rem',
    color: '#495057'
  };
  
  const labelStyle = {
    display: 'block',
    marginBottom: '8px',
    fontWeight: '600',
    color: '#2c3e50',
    fontSize: '0.875rem'
  };
  
  const inputStyle = {
    width: '100%',
    padding: '12px 16px',
    border: '2px solid #e9ecef',
    borderRadius: '12px',
    fontSize: '1rem',
    outline: 'none',
    transition: 'all 0.3s ease',
    backgroundColor: '#fff'
  };
  
  export default TrainersOverview;