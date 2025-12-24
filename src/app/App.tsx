import React, { useState } from "react";
import { 
  LayoutDashboard, 
  School, 
  CreditCard, 
  Cpu, 
  ChartBar, 
  Settings, 
  LogOut, 
  Bell, 
  Plus, 
  Search,
  EllipsisVertical,
  CircleCheck,
  CircleAlert,
  FileText,
  Users,
  Download,
  Calendar,
  ChevronRight,
  CheckCircle2,
  AlertCircle,
  BarChart3
} from "lucide-react";
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  LineChart, 
  Line,
  PieChart,
  Pie,
  Cell
} from "recharts";
import { toast, Toaster } from "sonner";
import { motion, AnimatePresence } from "motion/react";
import { ImageWithFallback } from "./components/figma/ImageWithFallback";

// --- Mock Data ---

const SCHOOLS_DATA = [
  { id: 1, name: "ABC Academy", status: "Active", plan: "Monthly", users: 120, nextPayment: "2025-03-01" },
  { id: 2, name: "XYZ High School", status: "Inactive", plan: "Yearly", users: 450, nextPayment: "2025-07-01" },
  { id: 3, name: "Sunrise Elementary", status: "Active", plan: "Yearly", users: 320, nextPayment: "2025-05-15" },
  { id: 4, name: "Oakwood Prep", status: "Active", plan: "Monthly", users: 85, nextPayment: "2025-03-10" },
  { id: 5, name: "Riverdale High", status: "Active", plan: "Yearly", users: 600, nextPayment: "2025-08-20" },
];

const ANALYTICS_DATA = [
  { name: "Jan", users: 4000, usage: 2400 },
  { name: "Feb", users: 4500, usage: 2800 },
  { name: "Mar", users: 5000, usage: 3200 },
  { name: "Apr", users: 4800, usage: 3100 },
  { name: "May", users: 5200, usage: 3500 },
  { name: "Jun", users: 5500, usage: 3800 },
];

const TEMPLATE_STATS = [
  { name: "IEP Template", usage: 500, successRate: 98, lastUpdated: "2025-01-01" },
  { name: "Report Template", usage: 150, successRate: 95, lastUpdated: "2025-02-15" },
  { name: "Assessment Template", usage: 320, successRate: 92, lastUpdated: "2024-12-10" },
];

const PIE_DATA = [
  { name: "Monthly", value: 10 },
  { name: "Yearly", value: 40 },
];

const COLORS = ["#239D99", "#E2E8F0"];

// --- Components ---

const SidebarItem = ({ icon: Icon, label, active, onClick }: { icon: any, label: string, active: boolean, onClick: () => void }) => (
  <button 
    onClick={onClick}
    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
      active 
        ? "bg-[#239D991A] text-[#239D99] ring-1 ring-[#239D99]" 
        : "text-[#444] hover:bg-gray-100"
    }`}
  >
    <Icon className={`size-5 ${active ? "text-[#239D99]" : "text-[#239D99]"}`} />
    <span className="font-medium text-[16px]">{label}</span>
  </button>
);

const Card = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
  <div className={`bg-white rounded-xl shadow-[0px_0px_44px_0px_rgba(0,0,0,0.07)] border border-[#E7E7E7] ${className}`}>
    {children}
  </div>
);

const StatCard = ({ title, value, icon: Icon, trend }: { title: string, value: string | number, icon: any, trend?: string }) => (
  <Card className="p-5 flex items-center justify-between">
    <div>
      <p className="text-[#444] text-[16px] font-medium mb-1">{title}</p>
      <p className="text-[#0F172B] text-[24px] font-bold">{value}</p>
      {trend && <p className="text-xs text-green-600 mt-1">{trend}</p>}
    </div>
    <div className="size-12 rounded-full bg-[#239D991A] flex items-center justify-center">
      <Icon className="text-[#239D99] size-6" />
    </div>
  </Card>
);

const Header = () => (
  <header className="flex items-center justify-between bg-white rounded-xl p-4 shadow-[0px_0px_44px_0px_rgba(0,0,0,0.07)] border border-[#E7E7E7] mb-6">
    <div>
      <h1 className="text-[#0F172B] text-[20px] font-semibold">Welcome, Laci!</h1>
      <p className="text-[#45556C] text-[14px]">Here's what's happening across the platform today.</p>
    </div>
    <div className="flex items-center gap-4">
      <button className="size-10 rounded-full bg-[#F3F3F5] flex items-center justify-center relative">
        <Bell className="text-[#239D99] size-5" />
        <span className="absolute top-2 right-2 size-2 bg-red-500 rounded-full"></span>
      </button>
      <div className="h-8 w-px bg-[#CECECE]"></div>
      <div className="flex items-center gap-3">
        <div className="text-right hidden sm:block">
          <p className="text-[#444] text-[16px] font-medium">Laci Miller</p>
          <p className="text-[#636363] text-[12px]">laci@poweredplans.com</p>
        </div>
        <ImageWithFallback 
          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop" 
          alt="Laci"
          className="size-10 rounded-full object-cover border border-[#239D99]"
        />
      </div>
    </div>
  </header>
);

const KPISection = ({ items }: { items: { title: string, value: string | number, icon: any, trend?: string, trendType?: 'pos' | 'neg' }[] }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
    {items.map((item, idx) => (
      <StatCard 
        key={idx} 
        title={item.title} 
        value={item.value} 
        icon={item.icon} 
        trend={item.trend} 
      />
    ))}
  </div>
);

// --- Pages ---

const DashboardPage = () => (
  <div className="space-y-6">
    <KPISection items={[
      { title: "Active Schools", value: "50", icon: School, trend: "+2 this month" },
      { title: "Active Users", value: "5,000", icon: Users, trend: "+124 this week" },
      { title: "Monthly Revenue", value: "$12,450", icon: CreditCard, trend: "+8.2% vs last month" },
      { title: "AI Success Rate", value: "96.5%", icon: Cpu, trend: "+0.5% improvement" },
    ]} />

    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <Card className="lg:col-span-2 p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-[18px] font-bold">Platform Activity</h2>
          <select className="bg-gray-50 border border-gray-200 rounded-md text-sm px-3 py-1 outline-none">
            <option>Last 6 Months</option>
            <option>Last Year</option>
          </select>
        </div>
        <div className="h-[300px] w-full min-h-[300px]">
          <ResponsiveContainer width="100%" height="100%" minWidth={0} minHeight={0}>
            <BarChart data={ANALYTICS_DATA}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F1F1F1" />
              <XAxis dataKey="name" axisLine={false} tickLine={false} />
              <YAxis axisLine={false} tickLine={false} />
              <Tooltip 
                cursor={{fill: '#F9FAFB'}}
                contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
              />
              <Bar dataKey="users" fill="#239D99" radius={[4, 4, 0, 0]} barSize={40} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </Card>

      <Card className="p-6">
        <h2 className="text-[18px] font-bold mb-6">Subscriptions</h2>
        <div className="h-[200px] w-full min-h-[200px]">
          <ResponsiveContainer width="100%" height="100%" minWidth={0} minHeight={0}>
            <PieChart>
              <Pie
                data={PIE_DATA}
                cx="50%"
                cy="50%"
                innerRadius={100}
                outerRadius={80}
                paddingAngle={5}
                dataKey="value"
              >
                {PIE_DATA.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="space-y-3 mt-4">
          {PIE_DATA.map((item, idx) => (
            <div key={item.name} className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="size-3 rounded-full" style={{ backgroundColor: COLORS[idx] }}></div>
                <span className="text-sm text-[#636363]">{item.name} Plan</span>
              </div>
              <span className="text-sm font-bold text-[#444]">{item.value} Schools</span>
            </div>
          ))}
        </div>
      </Card>
    </div>

    <Card className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-[18px] font-bold">Recent Schools</h2>
        <button className="text-[#239D99] text-sm font-medium hover:underline">View All</button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-gray-100">
              <th className="pb-3 text-sm font-semibold text-gray-500">School Name</th>
              <th className="pb-3 text-sm font-semibold text-gray-500">Status</th>
              <th className="pb-3 text-sm font-semibold text-gray-500">Plan</th>
              <th className="pb-3 text-sm font-semibold text-gray-500">Users</th>
              <th className="pb-3 text-sm font-semibold text-gray-500 text-right">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {SCHOOLS_DATA.slice(0, 3).map((school) => (
              <tr key={school.id}>
                <td className="py-4 text-[#444] font-medium">{school.name}</td>
                <td className="py-4">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    school.status === 'Active' ? 'bg-green-50 text-green-600' : 'bg-gray-100 text-gray-500'
                  }`}>
                    {school.status}
                  </span>
                </td>
                <td className="py-4 text-sm text-gray-600">{school.plan}</td>
                <td className="py-4 text-sm text-gray-600">{school.users}</td>
                <td className="py-4 text-right">
                  <button className="text-gray-400 hover:text-[#239D99]">
                    <EllipsisVertical className="size-5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  </div>
);

const SchoolsPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState<"add" | "edit" | "view">("add");
  const [selectedSchool, setSelectedSchool] = useState<any>(null);
  const [schools, setSchools] = useState(SCHOOLS_DATA);

  const handleAction = (mode: "add" | "edit" | "view", school: any = null) => {
    setModalMode(mode);
    setSelectedSchool(school);
    setIsModalOpen(true);
  };

  const toggleStatus = (id: number) => {
    setSchools(prev => prev.map(s => 
      s.id === id ? { ...s, status: s.status === 'Active' ? 'Inactive' : 'Active' } : s
    ));
    toast.success("School status updated successfully");
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <h2 className="text-[24px] font-bold text-[#0F172B]">Schools Management</h2>
        <button 
          onClick={() => handleAction("add")}
          className="bg-[#239D99] text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-[#1C7D7A] transition-colors"
        >
          <Plus className="size-5" />
          Add New School
        </button>
      </div>

      <KPISection items={[
        { title: "Total Schools", value: schools.length, icon: School, trend: "4 Pending Approval" },
        { title: "Active Schools", value: schools.filter(s => s.status === 'Active').length, icon: CheckCircle2, trend: "92% Attendance" },
        { title: "Inactive Schools", value: schools.filter(s => s.status === 'Inactive').length, icon: AlertCircle, trend: "-1 from last month" },
        { title: "Avg Users/School", value: "92.6", icon: Users, trend: "+4.2% growth" },
      ]} />

      <Card className="p-0 overflow-hidden">
        <div className="p-4 border-b border-gray-100 flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 size-4" />
            <input 
              type="text" 
              placeholder="Search schools..." 
              className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-[#239D9940] text-sm"
            />
          </div>
          <div className="flex gap-2">
            <select className="bg-gray-50 border border-gray-200 rounded-lg text-sm px-3 py-2 outline-none">
              <option>All Plans</option>
              <option>Monthly</option>
              <option>Yearly</option>
            </select>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">School Name</th>
                <th className="px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">Subscription</th>
                <th className="px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">Active Users</th>
                <th className="px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-100">
              {schools.map((school) => (
                <tr key={school.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">
                    <button onClick={() => handleAction("view", school)} className="hover:text-[#239D99] transition-colors">
                      {school.name}
                    </button>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      school.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                    }`}>
                      {school.status === 'Active' ? <CircleCheck className="size-3" /> : <CircleAlert className="size-3" />}
                      {school.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{school.plan}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{school.users}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm">
                    <div className="flex justify-end gap-3">
                      <button onClick={() => handleAction("view", school)} className="text-[#239D99] font-medium hover:underline">View</button>
                      <button onClick={() => handleAction("edit", school)} className="text-[#239D99] font-medium hover:underline">Edit</button>
                      <button 
                        onClick={() => toggleStatus(school.id)} 
                        className={`font-medium hover:underline ${school.status === 'Active' ? 'text-red-600' : 'text-green-600'}`}
                      >
                        {school.status === 'Active' ? 'Deactivate' : 'Activate'}
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      {/* School Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              className="bg-white rounded-2xl p-0 w-full max-w-2xl relative z-10 shadow-2xl overflow-hidden"
            >
              <div className="p-6 border-b border-gray-100 flex items-center justify-between bg-gray-50/50">
                <h3 className="text-xl font-bold text-gray-900 capitalize">
                  {modalMode} School
                </h3>
                <button onClick={() => setIsModalOpen(false)} className="p-2 hover:bg-gray-200 rounded-full transition-colors">
                  <Plus className="size-5 rotate-45 text-gray-500" />
                </button>
              </div>

              <div className="p-8 max-h-[80vh] overflow-y-auto">
                {modalMode === "view" ? (
                  <div className="space-y-8">
                    <div className="flex items-center gap-6">
                      <div className="size-20 rounded-2xl bg-[#239D991A] flex items-center justify-center">
                        <School className="text-[#239D99] size-10" />
                      </div>
                      <div>
                        <h4 className="text-2xl font-bold">{selectedSchool?.name}</h4>
                        <div className="flex items-center gap-2 mt-1">
                          <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${selectedSchool?.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}>
                            {selectedSchool?.status}
                          </span>
                          <span className="text-sm text-gray-500">• {selectedSchool?.plan} Plan</span>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-4">
                      <div className="p-4 bg-gray-50 rounded-xl">
                        <p className="text-xs text-gray-400 uppercase font-bold mb-1">Total Users</p>
                        <p className="text-xl font-bold">{selectedSchool?.users}</p>
                      </div>
                      <div className="p-4 bg-gray-50 rounded-xl">
                        <p className="text-xs text-gray-400 uppercase font-bold mb-1">Renewal Date</p>
                        <p className="text-xl font-bold">{selectedSchool?.nextPayment}</p>
                      </div>
                      <div className="p-4 bg-gray-50 rounded-xl">
                        <p className="text-xs text-gray-400 uppercase font-bold mb-1">Storage Used</p>
                        <p className="text-xl font-bold">12.4 GB</p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h5 className="font-bold border-b border-gray-100 pb-2">Recent School Activity</h5>
                      {[1, 2, 3].map(i => (
                        <div key={i} className="flex items-center justify-between text-sm">
                          <div className="flex items-center gap-3">
                            <div className="size-2 bg-[#239D99] rounded-full"></div>
                            <span className="text-gray-600">IEP Template updated by School Admin</span>
                          </div>
                          <span className="text-gray-400">{i * 2}h ago</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); toast.success(`School ${modalMode === 'add' ? 'created' : 'updated'} successfully`); setIsModalOpen(false); }}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-gray-700">School Name</label>
                        <input 
                          defaultValue={selectedSchool?.name} 
                          className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-[#239D9940]"
                          placeholder="e.g. Springfield Elementary"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-gray-700">Subscription Plan</label>
                        <select 
                          defaultValue={selectedSchool?.plan}
                          className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-[#239D9940]"
                        >
                          <option>Monthly</option>
                          <option>Yearly</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-gray-700">Contact Email</label>
                        <input 
                          type="email"
                          placeholder="admin@school.com"
                          className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-[#239D9940]"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-gray-700">Max User Capacity</label>
                        <input 
                          type="number"
                          defaultValue={selectedSchool?.users || 100}
                          className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-[#239D9940]"
                        />
                      </div>
                    </div>
                    
                    <div className="pt-6 flex gap-3">
                      <button 
                        type="button"
                        onClick={() => setIsModalOpen(false)}
                        className="flex-1 py-3 border border-gray-200 rounded-xl font-bold text-gray-600 hover:bg-gray-50"
                      >
                        Cancel
                      </button>
                      <button 
                        type="submit"
                        className="flex-1 py-3 bg-[#239D99] text-white rounded-xl font-bold hover:bg-[#1C7D7A]"
                      >
                        {modalMode === 'add' ? 'Create School' : 'Save Changes'}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

const BillingPage = () => {
  const [selectedSchool, setSelectedSchool] = useState<any>(null);
  const [isModifying, setIsModifying] = useState(false);
  const [billingTab, setBillingTab] = useState("overview");

  const handleSendReminder = (schoolName: string) => {
    toast.success(`Payment reminder sent to ${schoolName}`);
  };

  const handleUpdatePlan = (schoolId: number, newPlan: string) => {
    toast.success(`Plan updated to ${newPlan} for school`);
    setIsModifying(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-[24px] font-bold text-[#0F172B]">Subscription & Billing</h2>
        <div className="flex gap-2">
          <button className="bg-white border border-gray-200 text-gray-700 px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-gray-50 transition-colors">
            <Download className="size-4" />
            Export Invoices
          </button>
        </div>
      </div>

      <KPISection items={[
        { title: "MRR", value: "$12,450", icon: CreditCard, trend: "+$1,200 this month" },
        { title: "Pending Invoices", value: "12", icon: FileText, trend: "$3,420 total value" },
        { title: "Churn Rate", value: "1.2%", icon: BarChart3, trend: "-0.5% vs last qtr" },
        { title: "Proj. Next Month", value: "$14,100", icon: ChevronRight, trend: "Based on renewals" },
      ]} />

      <div className="flex gap-4 border-b border-gray-100 mb-6">
        {["overview", "subscriptions", "invoices"].map((tab) => (
          <button
            key={tab}
            onClick={() => setBillingTab(tab)}
            className={`pb-4 px-2 text-sm font-medium capitalize transition-colors relative ${
              billingTab === tab ? "text-[#239D99]" : "text-gray-500 hover:text-gray-700"
            }`}
          >
            {tab}
            {billingTab === tab && (
              <motion.div layoutId="billingTab" className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#239D99]" />
            )}
          </button>
        ))}
      </div>

      {billingTab === "overview" && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card className="lg:col-span-2 p-6">
            <h3 className="text-lg font-bold mb-4">Revenue Trends</h3>
            <div className="h-[300px] w-full min-h-[300px]">
              <ResponsiveContainer width="100%" height="100%" minWidth={0} minHeight={0}>
                <LineChart data={ANALYTICS_DATA}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F1F1F1" />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} />
                  <YAxis axisLine={false} tickLine={false} />
                  <Tooltip />
                  <Line type="monotone" dataKey="usage" stroke="#239D99" strokeWidth={3} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-lg font-bold mb-4">Payment Status</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                <span className="text-sm font-medium text-green-700">Successful</span>
                <span className="text-sm font-bold text-green-700">94.2%</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
                <span className="text-sm font-medium text-yellow-700">Pending</span>
                <span className="text-sm font-bold text-yellow-700">4.1%</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
                <span className="text-sm font-medium text-red-700">Failed</span>
                <span className="text-sm font-bold text-red-700">1.7%</span>
              </div>
            </div>
            <button className="w-full mt-6 py-2 bg-gray-50 hover:bg-gray-100 rounded-lg text-sm font-bold">
              View All Reports
            </button>
          </Card>
        </div>
      )}

      {billingTab === "subscriptions" && (
        <Card className="p-0 overflow-hidden">
          <table className="w-full text-left">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase">School Name</th>
                <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase">Plan Type</th>
                <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase">Amount</th>
                <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase">Next Billing</th>
                <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {SCHOOLS_DATA.map((school) => (
                <tr key={school.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 font-medium text-gray-900">{school.name}</td>
                  <td className="px-6 py-4">
                    <span className="text-sm text-gray-600">{school.plan}</span>
                  </td>
                  <td className="px-6 py-4 text-sm font-bold">
                    {school.plan === 'Monthly' ? '$299.00' : '$2,999.00'}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">{school.nextPayment}</td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex justify-end gap-2">
                      <button 
                        onClick={() => { setSelectedSchool(school); setIsModifying(true); }}
                        className="text-sm text-[#239D99] font-medium hover:underline"
                      >
                        Modify
                      </button>
                      <button 
                        onClick={() => handleSendReminder(school.name)}
                        className="text-sm text-gray-500 font-medium hover:underline"
                      >
                        Remind
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>
      )}

      {billingTab === "invoices" && (
        <Card className="p-0 overflow-hidden">
          <table className="w-full text-left">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase">Invoice ID</th>
                <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase">School</th>
                <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase">Date</th>
                <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase">Amount</th>
                <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase">Status</th>
                <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase text-right">Invoice</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                <tr key={i} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm font-mono text-gray-600">#INV-25-0{120 + i}</td>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">ABC Academy</td>
                  <td className="px-6 py-4 text-sm text-gray-500">Feb {10 + i}, 2025</td>
                  <td className="px-6 py-4 text-sm font-bold text-gray-900">$299.00</td>
                  <td className="px-6 py-4">
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-bold uppercase bg-green-100 text-green-700">Paid</span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="p-1 hover:bg-gray-100 rounded text-gray-400">
                      <Download className="size-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>
      )}

      {/* Modify Plan Modal Overlay */}
      <AnimatePresence>
        {isModifying && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }}
              onClick={() => setIsModifying(false)}
              className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white rounded-2xl p-8 w-full max-w-md relative z-10 shadow-2xl"
            >
              <h3 className="text-xl font-bold mb-2">Modify Subscription</h3>
              <p className="text-gray-500 text-sm mb-6">Updating plan for <span className="text-gray-900 font-bold">{selectedSchool?.name}</span></p>
              
              <div className="space-y-4 mb-8">
                <p className="text-sm font-bold text-gray-700">Select New Plan</p>
                <div className="grid grid-cols-2 gap-3">
                  <button 
                    onClick={() => handleUpdatePlan(selectedSchool.id, "Monthly")}
                    className={`p-4 rounded-xl border-2 transition-all ${selectedSchool?.plan === 'Monthly' ? 'border-[#239D99] bg-[#239D990A]' : 'border-gray-100 hover:border-gray-200'}`}
                  >
                    <p className="font-bold">Monthly</p>
                    <p className="text-xs text-gray-500 mt-1">$299/mo</p>
                  </button>
                  <button 
                    onClick={() => handleUpdatePlan(selectedSchool.id, "Yearly")}
                    className={`p-4 rounded-xl border-2 transition-all ${selectedSchool?.plan === 'Yearly' ? 'border-[#239D99] bg-[#239D990A]' : 'border-gray-100 hover:border-gray-200'}`}
                  >
                    <p className="font-bold">Yearly</p>
                    <p className="text-xs text-gray-500 mt-1">$2,999/yr</p>
                  </button>
                </div>
              </div>

              <div className="flex gap-3">
                <button 
                  onClick={() => setIsModifying(false)}
                  className="flex-1 py-3 border border-gray-200 rounded-xl font-bold text-gray-600 hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button 
                  onClick={() => handleUpdatePlan(selectedSchool.id, "Selected Plan")}
                  className="flex-1 py-3 bg-[#239D99] text-white rounded-xl font-bold hover:bg-[#1C7D7A]"
                >
                  Confirm Change
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

const TemplatesPage = () => (
  <div className="space-y-6">
    <div className="flex items-center justify-between">
      <h2 className="text-[24px] font-bold text-[#0F172B]">AI Extraction Templates</h2>
      <button className="bg-[#239D99] text-white px-4 py-2 rounded-lg flex items-center gap-2">
        <Plus className="size-5" />
        New Template
      </button>
    </div>

    <KPISection items={[
      { title: "Total Templates", value: "12", icon: Cpu, trend: "3 in development" },
      { title: "Avg Success Rate", value: "95.8%", icon: CheckCircle2, trend: "+1.2% improvement" },
      { title: "Total Extractions", value: "42.5k", icon: FileText, trend: "+8.4k last 30d" },
      { title: "Failed Items", value: "142", icon: AlertCircle, trend: "Manual review needed" },
    ]} />

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {TEMPLATE_STATS.map((template) => (
        <Card key={template.name} className="p-6">
          <div className="flex items-start justify-between mb-4">
            <div className="size-12 rounded-xl bg-[#239D991A] flex items-center justify-center">
              <Cpu className="text-[#239D99] size-6" />
            </div>
            <span className="text-xs font-medium text-gray-400">v2.4.0</span>
          </div>
          <h3 className="text-lg font-bold mb-1">{template.name}</h3>
          <p className="text-sm text-gray-500 mb-6">Last updated {template.lastUpdated}</p>
          
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div>
              <p className="text-xs text-gray-400 uppercase font-semibold mb-1">Total Uses</p>
              <p className="text-xl font-bold">{template.usage}</p>
            </div>
            <div>
              <p className="text-xs text-gray-400 uppercase font-semibold mb-1">Success Rate</p>
              <p className="text-xl font-bold text-green-600">{template.successRate}%</p>
            </div>
          </div>
          
          <div className="flex gap-2">
            <button className="flex-1 py-2 bg-gray-50 hover:bg-gray-100 text-[#444] rounded-lg text-sm font-medium transition-colors border border-gray-200">
              Edit Logic
            </button>
            <button className="flex-1 py-2 bg-[#239D991A] hover:bg-[#239D992A] text-[#239D99] rounded-lg text-sm font-medium transition-colors">
              Analytics
            </button>
          </div>
        </Card>
      ))}
    </div>

    <Card className="p-6">
      <h3 className="text-lg font-bold mb-6">Template Performance (Accuracy Over Time)</h3>
      <div className="h-[300px] w-full min-h-[300px]">
        <ResponsiveContainer width="100%" height="100%" minWidth={0} minHeight={0}>
          <LineChart data={ANALYTICS_DATA}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F1F1F1" />
            <XAxis dataKey="name" axisLine={false} tickLine={false} />
            <YAxis axisLine={false} tickLine={false} domain={[80, 100]} />
            <Tooltip />
            <Line type="monotone" dataKey="usage" stroke="#239D99" strokeWidth={3} dot={{ r: 4, fill: '#239D99', strokeWidth: 2, stroke: '#fff' }} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Card>
  </div>
);

const AnalyticsPage = () => (
  <div className="space-y-6">
    <div className="flex items-center justify-between">
      <h2 className="text-[24px] font-bold text-[#0F172B]">Platform Analytics</h2>
      <div className="flex gap-2">
        <button className="bg-white border border-gray-200 px-4 py-2 rounded-lg flex items-center gap-2 text-sm font-medium">
          <Calendar className="size-4" />
          Mar 1 - Mar 31, 2025
        </button>
        <button className="bg-[#239D99] text-white px-4 py-2 rounded-lg flex items-center gap-2 text-sm font-medium">
          <Download className="size-4" />
          Generate Report
        </button>
      </div>
    </div>

    <KPISection items={[
      { title: "Engagement Score", value: "84/100", icon: BarChart3, trend: "Top 10% performance" },
      { title: "Avg Session", value: "18m 24s", icon: Calendar, trend: "+2m from last week" },
      { title: "Adoption Rate", value: "72.4%", icon: Users, trend: "+5.1% vs last month" },
      { title: "Reports Generated", value: "842", icon: FileText, trend: "Record high today" },
    ]} />

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <Card className="p-6">
        <p className="text-sm text-gray-500 font-medium mb-1">Avg. Sessions per School</p>
        <p className="text-3xl font-bold">142.5</p>
        <div className="mt-4 flex items-center gap-2">
          <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded">↑ 12%</span>
          <span className="text-xs text-gray-400">vs last month</span>
        </div>
      </Card>
      <Card className="p-6">
        <p className="text-sm text-gray-500 font-medium mb-1">User Engagement Rate</p>
        <p className="text-3xl font-bold">78.2%</p>
        <div className="mt-4 flex items-center gap-2">
          <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded">↑ 5.4%</span>
          <span className="text-xs text-gray-400">vs last month</span>
        </div>
      </Card>
      <Card className="p-6">
        <p className="text-sm text-gray-500 font-medium mb-1">Active IEPs Managed</p>
        <p className="text-3xl font-bold">12,450</p>
        <div className="mt-4 flex items-center gap-2">
          <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded">↑ 22%</span>
          <span className="text-xs text-gray-400">vs last month</span>
        </div>
      </Card>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <Card className="p-6">
        <h3 className="text-lg font-bold mb-6">Feature Adoption</h3>
        <div className="space-y-6">
          {[
            { name: "IEP Management", percent: 85, color: "#239D99" },
            { name: "Progress Tracking", percent: 72, color: "#3B82F6" },
            { name: "Survey Distribution", percent: 45, color: "#F59E0B" },
            { name: "Team Collaboration", percent: 64, color: "#8B5CF6" }
          ].map((feature) => (
            <div key={feature.name}>
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium text-gray-700">{feature.name}</span>
                <span className="text-sm font-bold">{feature.percent}%</span>
              </div>
              <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                <div 
                  className="h-full transition-all duration-1000" 
                  style={{ width: `${feature.percent}%`, backgroundColor: feature.color }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </Card>

      <Card className="p-6">
        <h3 className="text-lg font-bold mb-6">User Growth</h3>
        <div className="h-[300px] w-full min-h-[300px]">
          <ResponsiveContainer width="100%" height="100%" minWidth={0} minHeight={0}>
            <BarChart data={ANALYTICS_DATA}>
              <XAxis dataKey="name" axisLine={false} tickLine={false} />
              <YAxis axisLine={false} tickLine={false} />
              <Tooltip />
              <Bar dataKey="users" fill="#239D99" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </Card>
    </div>
  </div>
);

const SettingsPage = () => {
  const [activeSubTab, setActiveSubTab] = useState("general");
  const [platformName, setPlatformName] = useState("Powered Plans");
  const [isSaving, setIsSaving] = useState(false);
  const [editingRole, setEditingRole] = useState<any>(null);

  const handleSave = () => {
    setIsSaving(true);
    setTimeout(() => {
      setIsSaving(false);
      toast.success("Settings updated successfully");
    }, 1000);
  };

  const PERMISSION_MODULES = [
    { id: "schools", label: "School Management", permissions: ["view", "create", "edit", "delete", "deactivate"] },
    { id: "ieps", label: "IEP Management", permissions: ["view", "create", "edit", "export"] },
    { id: "templates", label: "AI Templates", permissions: ["view", "edit_logic", "delete"] },
    { id: "billing", label: "Financial Data", permissions: ["view_invoices", "modify_plans", "refunds"] },
    { id: "analytics", label: "Global Analytics", permissions: ["view_global", "export_reports"] },
  ];

  const subTabs = [
    { id: "general", label: "General", icon: Settings },
    { id: "roles", label: "Roles & Permissions", icon: Users },
    { id: "security", label: "Security", icon: AlertCircle },
    { id: "notifications", label: "Notifications", icon: Bell },
  ];

  if (editingRole) {
    return (
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        className="space-y-6"
      >
        <div className="flex items-center gap-4">
          <button 
            onClick={() => setEditingRole(null)}
            className="p-2 hover:bg-white border border-transparent hover:border-gray-200 rounded-lg transition-all"
          >
            <Plus className="size-5 rotate-45 text-gray-400" />
          </button>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-[24px] font-bold text-[#0F172B]">Configure Role: {editingRole.role}</h2>
              <span className="px-2 py-0.5 bg-[#239D991A] text-[#239D99] text-xs font-bold rounded-full">System Role</span>
            </div>
            <p className="text-gray-500 text-sm">Define granular access levels and platform capabilities for this role.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <Card className="p-0 overflow-hidden">
              <div className="p-6 border-b border-gray-100 bg-gray-50/50">
                <h3 className="font-bold">Module Permissions</h3>
              </div>
              <div className="divide-y divide-gray-100">
                {PERMISSION_MODULES.map((module) => (
                  <div key={module.id} className="p-6">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                      <div>
                        <h4 className="font-bold text-gray-900">{module.label}</h4>
                        <p className="text-xs text-gray-500">Access control for {module.id} related features</p>
                      </div>
                      <div className="flex items-center gap-4">
                        <button className="text-xs font-bold text-[#239D99]">Grant All</button>
                        <button className="text-xs font-bold text-gray-400">Revoke All</button>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                      {module.permissions.map((perm) => (
                        <label key={perm} className="flex items-center gap-2 p-3 bg-white border border-gray-100 rounded-xl cursor-pointer hover:border-[#239D9940] transition-all group">
                          <input type="checkbox" defaultChecked className="size-4 rounded border-gray-300 text-[#239D99] focus:ring-[#239D99]" />
                          <span className="text-xs font-medium text-gray-600 capitalize group-hover:text-[#239D99]">{perm.replace('_', ' ')}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          <div className="lg:col-span-1 space-y-6">
            <Card className="p-6">
              <h3 className="font-bold mb-4">Role Summary</h3>
              <div className="space-y-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-gray-400 uppercase">Role Name</label>
                  <input defaultValue={editingRole.role} className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg outline-none" />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold text-gray-400 uppercase">Description</label>
                  <textarea rows={3} defaultValue={editingRole.desc} className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg outline-none resize-none text-sm" />
                </div>
              </div>
              <div className="mt-8 pt-6 border-t border-gray-100 flex flex-col gap-3">
                <button 
                  onClick={() => { toast.success("Role permissions updated"); setEditingRole(null); }}
                  className="w-full py-3 bg-[#239D99] text-white rounded-xl font-bold hover:bg-[#1C7D7A]"
                >
                  Save Role Changes
                </button>
                <button 
                  onClick={() => setEditingRole(null)}
                  className="w-full py-3 border border-gray-200 text-gray-600 rounded-xl font-bold hover:bg-gray-50"
                >
                  Cancel
                </button>
              </div>
            </Card>

            <Card className="p-6 bg-amber-50/50 border-amber-100">
              <div className="flex gap-3">
                <AlertCircle className="size-5 text-amber-600 shrink-0" />
                <div>
                  <h4 className="text-sm font-bold text-amber-900">Important Note</h4>
                  <p className="text-xs text-amber-700 mt-1">Changes to role permissions will take effect for all {editingRole.count} active users upon their next session refresh.</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-[24px] font-bold text-[#0F172B]">Global Settings & Permissions</h2>
        <button 
          onClick={handleSave}
          disabled={isSaving}
          className="bg-[#239D99] text-white px-6 py-2 rounded-lg font-bold hover:bg-[#1C7D7A] transition-all disabled:opacity-50 flex items-center gap-2"
        >
          {isSaving ? "Saving..." : "Save Changes"}
        </button>
      </div>
      
      <KPISection items={[
        { title: "System Health", value: "100%", icon: CheckCircle2, trend: "All services online" },
        { title: "Active Admins", value: "5", icon: Users, trend: "Last login: 2m ago" },
        { title: "Last Backup", value: "4h ago", icon: Download, trend: "Verified successfully" },
        { title: "Security Alerts", value: "0", icon: AlertCircle, trend: "No threats detected" },
      ]} />

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Navigation Sidebar */}
        <div className="md:col-span-1 space-y-2">
          {subTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveSubTab(tab.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold transition-all ${
                activeSubTab === tab.id 
                  ? "bg-white border border-[#E7E7E7] text-[#239D99] shadow-sm" 
                  : "text-gray-500 hover:bg-gray-100"
              }`}
            >
              <tab.icon className="size-4" />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="md:col-span-3 space-y-6">
          <AnimatePresence mode="wait">
            {activeSubTab === "general" && (
              <motion.div
                key="general"
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                className="space-y-6"
              >
                <Card className="p-6">
                  <h3 className="text-lg font-bold mb-6">Platform Identity</h3>
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="text-xs font-bold text-gray-500 uppercase">Platform Name</label>
                        <input 
                          value={platformName}
                          onChange={(e) => setPlatformName(e.target.value)}
                          className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-[#239D9940]"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-xs font-bold text-gray-500 uppercase">Support Email</label>
                        <input 
                          placeholder="support@poweredplans.com"
                          className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-[#239D9940]"
                        />
                      </div>
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-gray-500 uppercase">Platform Logo</label>
                      <div className="flex items-center gap-4 p-4 border-2 border-dashed border-gray-200 rounded-xl">
                        <div className="size-12 bg-gray-100 rounded-lg flex items-center justify-center">
                          <Plus className="text-gray-400" />
                        </div>
                        <div>
                          <p className="text-sm font-bold">Upload new logo</p>
                          <p className="text-xs text-gray-400">PNG, JPG up to 5MB</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <h3 className="text-lg font-bold mb-4">Localization</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-gray-500 uppercase">Default Timezone</label>
                      <select className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg outline-none">
                        <option>UTC-5 (Eastern Time)</option>
                        <option>UTC-8 (Pacific Time)</option>
                      </select>
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-gray-500 uppercase">Date Format</label>
                      <select className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg outline-none">
                        <option>MM/DD/YYYY</option>
                        <option>DD/MM/YYYY</option>
                      </select>
                    </div>
                  </div>
                </Card>
              </motion.div>
            )}

            {activeSubTab === "roles" && (
              <motion.div
                key="roles"
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                className="space-y-6"
              >
                <Card className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-lg font-bold">System Roles</h3>
                    <button className="text-sm text-[#239D99] font-bold">+ Create Role</button>
                  </div>
                  <div className="space-y-4">
                    {[
                      { role: "School Admin", desc: "Full control over their school's data", count: 120, color: "bg-blue-500" },
                      { role: "Case Manager", desc: "Manage IEPs and student records", count: 850, color: "bg-purple-500" },
                      { role: "Teacher", desc: "View and edit progress reports", count: 3200, color: "bg-[#239D99]" },
                    ].map((role) => (
                      <div key={role.role} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                        <div className="flex items-center gap-4">
                          <div className={`size-2 rounded-full ${role.color}`}></div>
                          <div>
                            <p className="font-bold">{role.role}</p>
                            <p className="text-xs text-gray-500">{role.desc}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-4">
                          <span className="text-xs font-bold text-gray-400">{role.count} Users</span>
                          <button 
                            onClick={() => setEditingRole(role)}
                            className="text-xs font-bold text-[#239D99] hover:underline"
                          >
                            Configure
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            )}

            {activeSubTab === "security" && (
              <motion.div
                key="security"
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                className="space-y-6"
              >
                <Card className="p-6">
                  <h3 className="text-lg font-bold mb-6">Security & Authentication</h3>
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-bold">Two-Factor Authentication (2FA)</p>
                        <p className="text-sm text-gray-500">Require all Super Admins to use 2FA</p>
                      </div>
                      <div className="w-12 h-6 bg-[#239D99] rounded-full relative p-1">
                        <div className="absolute right-1 size-4 bg-white rounded-full"></div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between border-t border-gray-100 pt-6">
                      <div>
                        <p className="font-bold">Session Timeout</p>
                        <p className="text-sm text-gray-500">Automatically logout inactive users</p>
                      </div>
                      <select className="px-3 py-1 bg-gray-50 border border-gray-200 rounded-lg text-sm outline-none">
                        <option>30 Minutes</option>
                        <option>1 Hour</option>
                        <option>4 Hours</option>
                      </select>
                    </div>
                    <div className="flex items-center justify-between border-t border-gray-100 pt-6">
                      <div>
                        <p className="font-bold">IP Whitelisting</p>
                        <p className="text-sm text-gray-500">Restrict access to specific IP ranges</p>
                      </div>
                      <button className="text-sm font-bold text-[#239D99]">Manage IPs</button>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 border-red-100 bg-red-50/30">
                  <h3 className="text-lg font-bold text-red-600 mb-2">Maintenance Mode</h3>
                  <p className="text-sm text-gray-600 mb-4">When enabled, only Super Admins can access the platform. All other users will see a maintenance message.</p>
                  <button className="px-4 py-2 border-2 border-red-200 text-red-600 rounded-lg font-bold hover:bg-red-50 transition-colors">
                    Enable Maintenance Mode
                  </button>
                </Card>
              </motion.div>
            )}

            {activeSubTab === "notifications" && (
              <motion.div
                key="notifications"
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                className="space-y-6"
              >
                <Card className="p-6">
                  <h3 className="text-lg font-bold mb-6">Email Notifications</h3>
                  <div className="space-y-4">
                    {[
                      "New school signup alert",
                      "Subscription payment failure",
                      "AI template accuracy drop warning",
                      "System backup completed",
                      "New admin login detected",
                    ].map((item, i) => (
                      <div key={item} className="flex items-center justify-between py-2 border-b border-gray-50 last:border-0">
                        <span className="text-sm font-medium text-gray-700">{item}</span>
                        <div className={`w-10 h-5 rounded-full relative p-1 ${i % 2 === 0 ? 'bg-[#239D99]' : 'bg-gray-200'}`}>
                          <div className={`absolute size-3 bg-white rounded-full transition-all ${i % 2 === 0 ? 'right-1' : 'left-1'}`}></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

// --- Main App ---

export default function App() {
  const [activeTab, setActiveTab] = useState("dashboard");

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard": return <DashboardPage />;
      case "schools": return <SchoolsPage />;
      case "billing": return <BillingPage />;
      case "templates": return <TemplatesPage />;
      case "analytics": return <AnalyticsPage />;
      case "settings": return <SettingsPage />;
      default: return <DashboardPage />;
    }
  };

  return (
    <div className="flex min-h-screen bg-[#F9F9FC]">
      <Toaster position="top-right" />
      
      {/* Sidebar */}
      <aside className="w-[280px] bg-white border-r border-[#E7E7E7] flex flex-col fixed inset-y-0 left-0 z-50">
        <div className="p-8 pb-4">
          <div className="flex items-center mb-8">
            <img src={new URL("../assets/logo.svg", import.meta.url).href} alt="PoweredPlans Logo" className="h-8 w-auto" />
          </div>
          
          <nav className="space-y-1">
            <SidebarItem icon={LayoutDashboard} label="Dashboard" active={activeTab === "dashboard"} onClick={() => setActiveTab("dashboard")} />
            <SidebarItem icon={School} label="Schools" active={activeTab === "schools"} onClick={() => setActiveTab("schools")} />
            <SidebarItem icon={CreditCard} label="Subscriptions" active={activeTab === "billing"} onClick={() => setActiveTab("billing")} />
            <SidebarItem icon={Cpu} label="AI Templates" active={activeTab === "templates"} onClick={() => setActiveTab("templates")} />
            <SidebarItem icon={ChartBar} label="Analytics" active={activeTab === "analytics"} onClick={() => setActiveTab("analytics")} />
            <SidebarItem icon={Settings} label="Settings" active={activeTab === "settings"} onClick={() => setActiveTab("settings")} />
          </nav>
        </div>
        
        <div className="mt-auto p-8 border-t border-gray-100">
          <button 
            onClick={() => toast.info("Logging out...")}
            className="w-full flex items-center gap-3 px-4 py-3 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
          >
            <LogOut className="size-5" />
            <span className="font-medium">Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 ml-[280px] p-8 max-w-[1400px] mx-auto w-full">
        <Header />
        
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            {renderContent()}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}