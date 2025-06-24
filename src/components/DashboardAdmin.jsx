import React from 'react';
import { TrendingUp, TrendingDown, Users, Play, X, MoreHorizontal, Activity, Clock, CheckCircle } from 'lucide-react';

const DashboardOverview = () => {
  const statsData = [
    {
      title: 'Active Trainers',
      value: '24',
      change: '+12%',
      trend: 'up',
      icon: <Users size={40} />,
      color: '#4CAF50',
      bgGradient: 'linear-gradient(135deg, #4CAF50 0%, #45a049 100%)',
    },
    {
      title: 'Active Sessions',
      value: '187',
      change: '+8%',
      trend: 'up',
      icon: <Play size={40} />,
      color: '#2196F3',
      bgGradient: 'linear-gradient(135deg, #2196F3 0%, #1976D2 100%)',
    },
    {
      title: 'Missed Sessions',
      value: '12',
      change: '-5%',
      trend: 'down',
      icon: <X size={40} />,
      color: '#FF5722',
      bgGradient: 'linear-gradient(135deg, #FF5722 0%, #D32F2F 100%)',
    },
  ];

  const recentActivities = [
    { trainer: 'Alex Johnson', session: 'HIIT Training', status: 'completed', time: '2h ago' },
    { trainer: 'Sarah Wilson', session: 'Yoga Flow', status: 'active', time: 'Now' },
    { trainer: 'Mike Chen', session: 'Strength Training', status: 'scheduled', time: 'In 30min' },
    { trainer: 'Emma Davis', session: 'Cardio Blast', status: 'completed', time: '4h ago' },
  ];

  const performanceData = [
    { metric: 'Session Completion', value: 92, color: '#4CAF50' },
    { metric: 'Trainer Efficiency', value: 87, color: '#2196F3' },
    { metric: 'Client Satisfaction', value: 95, color: '#FF9800' },
    { metric: 'Revenue Growth', value: 78, color: '#9C27B0' },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed': return '#4CAF50';
      case 'active': return '#FF9800';
      case 'scheduled': return '#2196F3';
      default: return '#757575';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'completed': return <CheckCircle size={16} />;
      case 'active': return <Clock size={16} />;
      case 'scheduled': return <Activity size={16} />;
      default: return null;
    }
  };

  return (
    <div style={{
      padding: '24px',
      backgroundColor: '#f5f7fa',
      minHeight: '100vh',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    }}>
      {/* Header */}
      <div style={{ marginBottom: '32px' }}>
        <h1 style={{
          fontSize: '2.5rem',
          fontWeight: '700',
          color: '#2c3e50',
          margin: '0 0 8px 0'
        }}>
          Dashboard Overview
        </h1>
        <p style={{
          fontSize: '1rem',
          color: '#7f8c8d',
          margin: '0'
        }}>
          Monitor your fitness center's performance in real-time
        </p>
      </div>

      {/* Stats Cards */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '24px',
        marginBottom: '32px'
      }}>
        {statsData.map((stat, index) => (
          <div
            key={index}
            style={{
              background: stat.bgGradient,
              color: 'white',
              borderRadius: '16px',
              overflow: 'hidden',
              position: 'relative',
              transition: 'all 0.3s ease',
              cursor: 'pointer',
              boxShadow: '0 8px 32px rgba(0,0,0,0.1)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-8px)';
              e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 8px 32px rgba(0,0,0,0.1)';
            }}
          >
            <div style={{
              content: '""',
              position: 'absolute',
              top: '0',
              right: '0',
              width: '100px',
              height: '100px',
              background: 'rgba(255,255,255,0.1)',
              borderRadius: '50%',
              transform: 'translate(30px, -30px)'
            }} />
            <div style={{
              padding: '24px',
              position: 'relative',
              zIndex: 1
            }}>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                marginBottom: '16px'
              }}>
                <div style={{ opacity: 0.9 }}>
                  {stat.icon}
                </div>
                <button style={{
                  background: 'transparent',
                  border: 'none',
                  color: 'rgba(255,255,255,0.8)',
                  cursor: 'pointer',
                  padding: '4px'
                }}>
                  <MoreHorizontal size={20} />
                </button>
              </div>
              <h2 style={{
                fontSize: '3rem',
                fontWeight: '700',
                margin: '0 0 8px 0'
              }}>
                {stat.value}
              </h2>
              <p style={{
                opacity: 0.9,
                margin: '0 0 16px 0',
                fontSize: '0.875rem'
              }}>
                {stat.title}
              </p>
              <div style={{
                display: 'flex',
                alignItems: 'center'
              }}>
                {stat.trend === 'up' ? (
                  <TrendingUp size={16} style={{ marginRight: '4px' }} />
                ) : (
                  <TrendingDown size={16} style={{ marginRight: '4px' }} />
                )}
                <span style={{
                  fontWeight: '600',
                  fontSize: '0.875rem'
                }}>
                  {stat.change} from last month
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
        gap: '24px'
      }}>
        {/* Performance Metrics */}
        <div style={{
          background: 'white',
          borderRadius: '16px',
          boxShadow: '0 8px 32px rgba(0,0,0,0.08)',
          border: '1px solid rgba(255,255,255,0.2)',
          transition: 'all 0.3s ease'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,0,0,0.12)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.boxShadow = '0 8px 32px rgba(0,0,0,0.08)';
        }}>
          <div style={{ padding: '24px' }}>
            <h3 style={{
              fontSize: '1.25rem',
              fontWeight: '600',
              marginBottom: '24px',
              color: '#2c3e50'
            }}>
              Performance Metrics
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {performanceData.map((item, index) => (
                <div key={index}>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginBottom: '8px'
                  }}>
                    <span style={{
                      fontSize: '0.875rem',
                      fontWeight: '500',
                      color: '#34495e'
                    }}>
                      {item.metric}
                    </span>
                    <span style={{
                      fontSize: '0.875rem',
                      fontWeight: '600',
                      color: item.color
                    }}>
                      {item.value}%
                    </span>
                  </div>
                  <div style={{
                    height: '8px',
                    borderRadius: '4px',
                    backgroundColor: 'rgba(0,0,0,0.08)',
                    overflow: 'hidden'
                  }}>
                    <div style={{
                      height: '100%',
                      width: `${item.value}%`,
                      backgroundColor: item.color,
                      borderRadius: '4px',
                      transition: 'width 0.3s ease'
                    }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Recent Activities */}
        <div style={{
          background: 'white',
          borderRadius: '16px',
          boxShadow: '0 8px 32px rgba(0,0,0,0.08)',
          border: '1px solid rgba(255,255,255,0.2)',
          transition: 'all 0.3s ease'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,0,0,0.12)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.boxShadow = '0 8px 32px rgba(0,0,0,0.08)';
        }}>
          <div style={{ padding: '24px' }}>
            <h3 style={{
              fontSize: '1.25rem',
              fontWeight: '600',
              marginBottom: '24px',
              color: '#2c3e50'
            }}>
              Recent Activities
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {recentActivities.map((activity, index) => (
                <div
                  key={index}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    padding: '16px',
                    borderRadius: '12px',
                    backgroundColor: 'rgba(0,0,0,0.02)',
                    border: '1px solid rgba(0,0,0,0.05)',
                    transition: 'all 0.2s ease',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.04)';
                    e.currentTarget.style.transform = 'translateX(4px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.02)';
                    e.currentTarget.style.transform = 'translateX(0)';
                  }}
                >
                  <div style={{
                    marginRight: '16px',
                    backgroundColor: getStatusColor(activity.status),
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white'
                  }}>
                    {getStatusIcon(activity.status)}
                  </div>
                  <div style={{ flexGrow: 1 }}>
                    <div style={{
                      fontSize: '0.875rem',
                      fontWeight: '600',
                      color: '#2c3e50',
                      marginBottom: '2px'
                    }}>
                      {activity.trainer}
                    </div>
                    <div style={{
                      fontSize: '0.75rem',
                      color: '#7f8c8d'
                    }}>
                      {activity.session}
                    </div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{
                      backgroundColor: getStatusColor(activity.status),
                      color: 'white',
                      fontSize: '0.75rem',
                      fontWeight: '600',
                      textTransform: 'capitalize',
                      padding: '4px 8px',
                      borderRadius: '12px',
                      marginBottom: '4px',
                      display: 'inline-block'
                    }}>
                      {activity.status}
                    </div>
                    <div style={{
                      fontSize: '0.75rem',
                      color: '#95a5a6'
                    }}>
                      {activity.time}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardOverview;