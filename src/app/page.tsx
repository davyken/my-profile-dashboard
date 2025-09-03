"use client";

import React from 'react';
import { Bell, Search, Settings, Home, User, Wallet, Package, Users, CircleDot, Building, BarChart, Eye, TrendingUp, Calendar, ChevronLeft, ChevronRight, Maximize2, Download, HelpCircle, LogOut, RefreshCw } from 'lucide-react';

export default function MyProfileDashboard() {
  const weekDays = [
    { day: 'Sun', date: 31, active: false },
    { day: 'Mon', date: 1, active: false },
    { day: 'Tue', date: 2, active: false },
    { day: 'Wed', date: 3, active: true },
    { day: 'Thu', date: 4, active: false },
    { day: 'Fri', date: 5, active: false },
    { day: 'Sat', date: 6, active: false }
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 bg-slate-800 text-white flex flex-col">
        {/* Logo */}
        <div className="p-4">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
              <span className="text-slate-800 font-bold text-sm">M</span>
            </div>
            <span className="text-lg font-semibold">MyProfile</span>
          </div>
        </div>
        
        {/* Navigation */}
        <nav className="flex-1 px-4">
          <ul className="space-y-1">
            <li>
              <a href="#" className="flex items-center space-x-3 px-4 py-3 rounded-lg bg-white text-slate-800 font-medium">
                <Home className="w-5 h-5" />
                <span>Dashboard</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-slate-700 text-slate-300">
                <User className="w-5 h-5" />
                <span>MyProfile</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-slate-700 text-slate-300">
                <Wallet className="w-5 h-5" />
                <span>Wallet</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-slate-700 text-slate-300">
                <Package className="w-5 h-5" />
                <span>Products</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-slate-700 text-slate-300">
                <Users className="w-5 h-5" />
                <span>Contacts</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-slate-700 text-slate-300">
                <CircleDot className="w-5 h-5" />
                <span>Circles</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-slate-700 text-slate-300">
                <Building className="w-5 h-5" />
                <span>Communities</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-slate-700 text-slate-300">
                <BarChart className="w-5 h-5" />
                <span>Data</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-slate-700 text-slate-300">
                <Eye className="w-5 h-5" />
                <span>Insights</span>
              </a>
            </li>
          </ul>
        </nav>
        
        {/* Upgrade Plan */}
        <div className="p-4">
          <div className="bg-orange-500 rounded-lg p-4 mb-4">
            <h3 className="font-semibold text-white mb-2">Upgrade Plan</h3>
            <p className="text-orange-100 text-sm mb-3">Unlock premium features and get unlimited access</p>
            <button className="w-full bg-white text-orange-500 py-2 px-4 rounded-lg font-medium text-sm hover:bg-gray-100">
              Upgrade Now
            </button>
          </div>
        </div>

        {/* Bottom Menu */}
        <div className="p-4 border-t border-slate-700">
          <ul className="space-y-1">
            <li>
              <a href="#" className="flex items-center space-x-3 px-4 py-2 rounded-lg hover:bg-slate-700 text-slate-300 text-sm">
                <HelpCircle className="w-4 h-4" />
                <span>Help & Settings</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center space-x-3 px-4 py-2 rounded-lg hover:bg-slate-700 text-slate-300 text-sm">
                <Users className="w-4 h-4" />
                <span>Invite Others</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center space-x-3 px-4 py-2 rounded-lg hover:bg-slate-700 text-slate-300 text-sm">
                <HelpCircle className="w-4 h-4" />
                <span>Help Center</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center space-x-3 px-4 py-2 rounded-lg hover:bg-slate-700 text-slate-300 text-sm">
                <Settings className="w-4 h-4" />
                <span>Integrations</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center space-x-3 px-4 py-2 rounded-lg hover:bg-slate-700 text-slate-300 text-sm">
                <Settings className="w-4 h-4" />
                <span>Settings</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center space-x-3 px-4 py-2 rounded-lg hover:bg-slate-700 text-slate-300 text-sm">
                <Settings className="w-4 h-4" />
                <span>Policies</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center space-x-3 px-4 py-2 rounded-lg hover:bg-red-600 text-red-300 text-sm">
                <LogOut className="w-4 h-4" />
                <span>Log Out</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <h1 className="text-xl font-semibold text-gray-900">Dashboard</h1>
              <p className="text-gray-500 text-sm">Welcome to your MyProfile dashboard</p>
            </div>
            <div className="flex items-center space-x-4">
              <button className="flex items-center space-x-2 text-gray-600 hover:text-gray-800">
                <RefreshCw className="w-4 h-4" />
                <span className="text-sm">Refresh</span>
              </button>
              <div className="relative">
                <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input 
                  type="text" 
                  placeholder="Search..."
                  className="pl-10 pr-4 py-2 bg-gray-100 border-0 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 w-64"
                />
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <span>34,580 MyPts</span>
              </div>
              <div className="relative">
                <Bell className="w-5 h-5 text-gray-600" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full text-xs text-white flex items-center justify-center">1</div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-medium">JD</span>
                </div>
                <div className="text-sm">
                  <p className="font-medium text-gray-900">John Doe</p>
                  <p className="text-gray-500 text-xs">Personal Profile</p>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Main Dashboard Content */}
        <main className="flex-1 p-6 overflow-auto">
          {/* Welcome Section */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">Welcome back, John Doe!</h2>
              <p className="text-gray-600">Here&apos;s what&apos;s happening with your MyProfile account</p>
            </div>
            <div className="flex items-center space-x-3">
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center space-x-2">
                <Users className="w-4 h-4" />
                <span>Invite Others</span>
              </button>
              <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium flex items-center space-x-2">
                <Settings className="w-4 h-4" />
                <span>Report Bug</span>
              </button>
            </div>
          </div>

          {/* KPI Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* First Row */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-gray-600 text-sm mb-1">MyPts Balance</p>
                  <p className="text-3xl font-bold text-gray-900">34,580</p>
                  <button className="text-blue-600 text-sm hover:underline mt-2">Click to view analytics</button>
                </div>
                <div className="p-3 bg-blue-100 rounded-lg">
                  <div className="w-6 h-6 bg-blue-600 rounded"></div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-gray-600 text-sm mb-1">Profile Views</p>
                  <p className="text-3xl font-bold text-gray-900">1,247</p>
                  <button className="text-blue-600 text-sm hover:underline mt-2">Click to view analytics</button>
                </div>
                <div className="p-3 bg-green-100 rounded-lg">
                  <Eye className="w-6 h-6 text-green-600" />
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-gray-600 text-sm mb-1">Connections</p>
                  <p className="text-3xl font-bold text-gray-900">127</p>
                  <button className="text-blue-600 text-sm hover:underline mt-2">Click to view analytics</button>
                </div>
                <div className="p-3 bg-purple-100 rounded-lg">
                  <Users className="w-6 h-6 text-purple-600" />
                </div>
              </div>
            </div>

            {/* Second Row */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-gray-600 text-sm mb-1">Total Activities</p>
                  <p className="text-3xl font-bold text-gray-900">2,450</p>
                  <button className="text-blue-600 text-sm hover:underline mt-2">Click to view analytics</button>
                </div>
                <div className="p-3 bg-orange-100 rounded-lg">
                  <TrendingUp className="w-6 h-6 text-orange-600" />
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-gray-600 text-sm mb-1">MyPts Earned</p>
                  <p className="text-3xl font-bold text-gray-900">89</p>
                  <button className="text-blue-600 text-sm hover:underline mt-2">Click to view analytics</button>
                </div>
                <div className="p-3 bg-yellow-100 rounded-lg">
                  <div className="w-6 h-6 bg-yellow-600 rounded flex items-center justify-center">
                    <span className="text-white text-xs">🎁</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-gray-600 text-sm mb-1">Storage Used</p>
                  <p className="text-3xl font-bold text-gray-900">2.4 GB</p>
                  <button className="text-blue-600 text-sm hover:underline mt-2">Click to view analytics</button>
                </div>
                <div className="p-3 bg-indigo-100 rounded-lg">
                  <div className="w-6 h-6 bg-indigo-600 rounded"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Calendar Section */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 mb-8">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-3">
                <Calendar className="w-5 h-5 text-gray-600" />
                <h3 className="text-lg font-semibold text-gray-900">This Week</h3>
              </div>
              <div className="flex items-center space-x-2">
                <button className="p-2 hover:bg-gray-100 rounded-lg">
                  <ChevronLeft className="w-4 h-4 text-gray-600" />
                </button>
                <button className="p-2 hover:bg-gray-100 rounded-lg">
                  <ChevronRight className="w-4 h-4 text-gray-600" />
                </button>
                <button className="p-2 hover:bg-gray-100 rounded-lg">
                  <Maximize2 className="w-4 h-4 text-gray-600" />
                </button>
              </div>
            </div>
            
            <div className="grid grid-cols-7 gap-4">
              {weekDays.map((day, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-lg text-center ${
                    day.active
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <p className="text-sm font-medium mb-1">{day.day}</p>
                  <p className="text-2xl font-bold">{day.date}</p>
                </div>
              ))}
            </div>

            <div className="mt-6">
              <h4 className="font-medium text-gray-900 mb-2">Sep 3 Events</h4>
              <p className="text-gray-500 text-sm">No events scheduled</p>
            </div>
          </div>

          {/* Activity History */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-3">
                <TrendingUp className="w-5 h-5 text-gray-600" />
                <h3 className="text-lg font-semibold text-gray-900">Activity History</h3>
              </div>
              <div className="flex items-center space-x-3">
                <button className="text-gray-600 hover:text-gray-800 flex items-center space-x-2">
                  <Download className="w-4 h-4" />
                  <span className="text-sm">Export</span>
                </button>
                <select className="border border-gray-300 rounded-lg px-3 py-2 text-sm">
                  <option>All Activities</option>
                </select>
                <select className="border border-gray-300 rounded-lg px-3 py-2 text-sm">
                  <option>All Time</option>
                </select>
              </div>
            </div>

            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search activities..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg w-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="mt-6 space-y-4">
              <div className="flex items-start space-x-4 p-4 hover:bg-gray-50 rounded-lg transition-colors">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Users className="w-5 h-5 text-blue-600" />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between">
                    <p className="text-sm font-medium text-gray-900">Sarah Johnson</p>
                    <p className="text-xs text-gray-500">2 hours ago</p>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">Viewed your profile</p>
                  <div className="flex items-center mt-2">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      Profile View
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 p-4 hover:bg-gray-50 rounded-lg transition-colors">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Package className="w-5 h-5 text-green-600" />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between">
                    <p className="text-sm font-medium text-gray-900">Product Update</p>
                    <p className="text-xs text-gray-500">5 hours ago</p>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">New product added to your collection</p>
                  <div className="flex items-center mt-2">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      Product
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 p-4 hover:bg-gray-50 rounded-lg transition-colors">
                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Settings className="w-5 h-5 text-purple-600" />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between">
                    <p className="text-sm font-medium text-gray-900">Settings Changed</p>
                    <p className="text-xs text-gray-500">1 day ago</p>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">Privacy settings updated</p>
                  <div className="flex items-center mt-2">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                      Settings
                    </span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-6 text-center">
              <button className="text-blue-600 text-sm font-medium hover:text-blue-800">
                View All Activities
              </button>
            </div>
          </div>
          
          {/* Recent Connections */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 mt-8">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-3">
                <Users className="w-5 h-5 text-gray-600" />
                <h3 className="text-lg font-semibold text-gray-900">Recent Connections</h3>
              </div>
              <button className="text-blue-600 text-sm font-medium hover:text-blue-800">
                View All
              </button>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-medium">SJ</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">Sarah Johnson</p>
                    <p className="text-xs text-gray-500">Product Designer</p>
                  </div>
                </div>
                <button className="text-xs bg-blue-100 text-blue-800 px-3 py-1 rounded-full hover:bg-blue-200">
                  Connected
                </button>
              </div>
              
              <div className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-medium">MP</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">Mike Peterson</p>
                    <p className="text-xs text-gray-500">Software Engineer</p>
                  </div>
                </div>
                <button className="text-xs bg-blue-100 text-blue-800 px-3 py-1 rounded-full hover:bg-blue-200">
                  Connected
                </button>
              </div>
              
              <div className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-medium">ER</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">Emma Roberts</p>
                    <p className="text-xs text-gray-500">Marketing Manager</p>
                  </div>
                </div>
                <button className="text-xs bg-blue-100 text-blue-800 px-3 py-1 rounded-full hover:bg-blue-200">
                  Connected
                </button>
              </div>
            </div>
          </div>
          
          {/* Quick Actions */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 mt-8">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-3">
                <Settings className="w-5 h-5 text-gray-600" />
                <h3 className="text-lg font-semibold text-gray-900">Quick Actions</h3>
              </div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <button className="flex flex-col items-center justify-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mb-2">
                  <User className="w-5 h-5 text-blue-600" />
                </div>
                <span className="text-sm font-medium text-gray-700">Edit Profile</span>
              </button>
              
              <button className="flex flex-col items-center justify-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mb-2">
                  <Package className="w-5 h-5 text-green-600" />
                </div>
                <span className="text-sm font-medium text-gray-700">Add Product</span>
              </button>
              
              <button className="flex flex-col items-center justify-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mb-2">
                  <BarChart className="w-5 h-5 text-purple-600" />
                </div>
                <span className="text-sm font-medium text-gray-700">View Analytics</span>
              </button>
              
              <button className="flex flex-col items-center justify-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center mb-2">
                  <Settings className="w-5 h-5 text-orange-600" />
                </div>
                <span className="text-sm font-medium text-gray-700">Settings</span>
              </button>
            </div>
          </div>
        </main>
      </div>

      {/* Chat Widget */}
      <div className="fixed bottom-6 right-6">
        <button className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center shadow-lg hover:bg-blue-700">
          <span className="text-white text-sm">💬</span>
        </button>
        <div className="absolute bottom-16 right-0 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
          <span className="text-white text-xs">1</span>
        </div>
      </div>
    </div>
  );
}