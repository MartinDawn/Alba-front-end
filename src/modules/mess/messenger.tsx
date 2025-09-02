import React, { useState, useRef } from 'react';
import UserLayout from "./layout/layout";


interface Messenger {
  id: number;
  name: string;
  lastMessage: string;
  avatar: string;
}

interface Message {
  id: number;
  text?: string;
  sender: string;
  image?: string;
  video?: string;         // ...new property for video messages...
  file?: {                // ...new property for generic file messages...
    url: string;
    name: string;
  };
}

// Replace messages state with conversations state
const MessengerPage: React.FC = () => {
  const [selectedMessenger, setSelectedMessenger] = useState<number | null>(null);
  const [inputText, setInputText] = useState('');
  const [conversations, setConversations] = useState<Record<number, Message[]>>({});
  const userName = "John Doe";
  const [isPendingActive, setIsPendingActive] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleSend = () => {
    if (inputText.trim() && selectedMessenger !== null) {
      const newMsg = { id: Date.now(), text: inputText, sender: 'You' };
      setConversations({
        ...conversations,
        [selectedMessenger]: [...(conversations[selectedMessenger] || []), newMsg]
      });
      setInputText('');
    }
  };

  const handleSendImages = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0 || selectedMessenger === null) return;
    const files = Array.from(e.target.files);
    const newMessages = files.map(file => {
      const fileUrl = URL.createObjectURL(file);
      const fileType = file.type;
      if (fileType.startsWith('image/')) {
        return { id: Date.now() + Math.random(), sender: 'You', image: fileUrl };
      } else if (fileType.startsWith('video/')) {
        return { id: Date.now() + Math.random(), sender: 'You', video: fileUrl };
      } else {
        return { id: Date.now() + Math.random(), sender: 'You', file: { url: fileUrl, name: file.name } };
      }
    });
    setConversations({
      ...conversations,
      [selectedMessenger]: [...(conversations[selectedMessenger] || []), ...newMessages]
    });
    e.target.value = ''; // reset file input
  };

  const handleSwitchAccount = () => {
    // Implement switch account functionality as needed
    console.log("Switch account functionality triggered");
  };

  const Messengers: Messenger[] = [
    { id: 1, name: 'Alice', lastMessage: 'Hello', avatar: 'https://i.pravatar.cc/50?img=1' },
    { id: 2, name: 'Bob', lastMessage: 'How are you?', avatar: 'https://i.pravatar.cc/50?img=2' },
    { id: 3, name: 'Charlie', lastMessage: 'See you soon.', avatar: 'https://i.pravatar.cc/50?img=3' },
    { id: 1, name: 'Alice', lastMessage: 'Hello', avatar: 'https://i.pravatar.cc/50?img=1' },
    { id: 2, name: 'Bob', lastMessage: 'How are you?', avatar: 'https://i.pravatar.cc/50?img=2' },
    { id: 3, name: 'Charlie', lastMessage: 'See you soon.', avatar: 'https://i.pravatar.cc/50?img=3' },
    { id: 1, name: 'Alice', lastMessage: 'Hello', avatar: 'https://i.pravatar.cc/50?img=1' },
    { id: 2, name: 'Bob', lastMessage: 'How are you?', avatar: 'https://i.pravatar.cc/50?img=2' },
    { id: 3, name: 'Charlie', lastMessage: 'See you soon.', avatar: 'https://i.pravatar.cc/50?img=3' },
    { id: 1, name: 'Alice', lastMessage: 'Hello', avatar: 'https://i.pravatar.cc/50?img=1' },
    { id: 2, name: 'Bob', lastMessage: 'How are you?', avatar: 'https://i.pravatar.cc/50?img=2' },
    { id: 3, name: 'Charlie', lastMessage: 'See you soon.', avatar: 'https://i.pravatar.cc/50?img=3' },
  ];

  // Get current conversation or empty array if none exists
  const currentConversation = selectedMessenger ? (conversations[selectedMessenger] || []) : [];

  return (
    <UserLayout>
      <>
        <style>{`
          /* Add global rules to prevent overall scrolling */
          html, body {
            height: 100%;
            overflow: hidden;
            margin: 0;
          }
          .custom-scrollbar {
            scrollbar-width: thin;
            scrollbar-color: #6b7280 transparent;
          }
          .custom-scrollbar::-webkit-scrollbar {
            width: 6px;
          }
          .custom-scrollbar::-webkit-scrollbar-track {
            background: transparent;
          }
          .custom-scrollbar::-webkit-scrollbar-thumb {
            background-color: #6b7280;
            border-radius: 3px;
          }
        `}</style>
        <div className="h-screen overflow-hidden bg-black text-white"> {/* Updated container */}
          <div className="flex h-full"> {/* Updated flex container */}
            {/* Danh sách hội thoại bên trái */}
            <div className="w-1/4 border-r border-gray-700 p-4 flex flex-col">
              <div className="flex items-center justify-between mb-4">
                <button onClick={handleSwitchAccount} className="flex items-center space-x-2">
                  <span className="font-bold">{userName}</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400 hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582M4 9a7 7 0 007 7 7 7 0 007-7M14 15l3 3m0 0l3-3m-3 3V8" />
                  </svg>
                </button>
              </div>
              {/* Updated search bar with magnifying glass icon */}
              <div className="mb-4 flex items-center bg-gray-800 rounded">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-gray-400 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 10-14 0 7 7 0 0014 0z" />
                </svg>
                <input 
                  type="text" 
                  placeholder="Tìm kiếm" 
                  autoComplete="off" 
                  className="p-2 bg-transparent rounded focus:outline-none flex-grow"
                />
              </div>
              {/* New header with Messenger text and updated pending message text */}
              <div className="flex items-center justify-between py-2">
                <p className="text-lg font-bold">Messenger</p>
                <button 
                  onClick={() => setIsPendingActive(true)} 
                  className={`font-bold ${isPendingActive ? "text-blue-500" : "text-gray-400"}`}
                >
                  Pending Messenger
                </button>
              </div>
              <ul className="overflow-y-auto custom-scrollbar">
                {Messengers.map(c => (
                  <li 
                    key={c.id} 
                    className="flex items-center p-2 hover:bg-gray-800 cursor-pointer"
                    onClick={() => {
                      setSelectedMessenger(c.id);
                      setIsPendingActive(false);
                    }}
                  >
                    <img src={c.avatar} alt={c.name} className="w-10 h-10 rounded-full mr-3" />
                    <div>
                      <p className="font-semibold">{c.name}</p>
                      <p className="text-sm text-gray-400">{c.lastMessage}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            {/* Khu vực trò chuyện bên phải */}
            <div className="w-3/4 flex flex-col pb-4"> {/* changed: added bottom padding */}
              {selectedMessenger ? (
                <>
                  {/* Header của hội thoại */}
                  <div className="border-b border-gray-700 p-4 flex items-center justify-between">
                    <div className="flex items-center">
                      <img 
                        src={Messengers.find(m => m.id === selectedMessenger)?.avatar} 
                        alt={Messengers.find(m => m.id === selectedMessenger)?.name} 
                        className="w-10 h-10 rounded-full mr-3" 
                      />
                      <p className="font-bold">
                        {Messengers.find(m => m.id === selectedMessenger)?.name}
                      </p>
                    </div>
                    <button onClick={() => { /* Implement additional info functionality */ }}>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M12 2a10 10 0 100 20 10 10 0 000-20z" />
                      </svg>
                    </button>
                  </div>
                  {/* Danh sách tin nhắn */}
                  <div className="flex-grow overflow-y-auto p-4 custom-scrollbar">
                    {currentConversation.map(msg => (
                      <div key={msg.id} className={`mb-2 ${msg.sender === 'You' ? 'text-right' : 'text-left'}`}>
                        {msg.image ? (
                          <img src={msg.image} alt="sent content" className="inline-block max-w-xs rounded-lg" />
                        ) : msg.video ? (
                          <video src={msg.video} controls className="inline-block max-w-xs rounded-lg" />
                        ) : msg.file ? (
                          <a href={msg.file.url} download={msg.file.name} className="inline-block px-4 py-2 rounded-lg bg-gray-700">
                            {msg.file.name}
                          </a>
                        ) : (
                          <span className={`inline-block px-4 py-2 rounded-lg ${msg.sender === 'You' ? 'bg-blue-500' : 'bg-gray-800'}`}>
                            {msg.text}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                  {/* Ô nhập tin nhắn */}
                  <div className="flex items-center border-t border-gray-700 p-4">
                    <div className="flex flex-grow bg-gray-900 rounded-lg overflow-hidden">
                      <input 
                        type="text" 
                        placeholder="Type a message..." 
                        autoComplete="off"
                        className="flex-grow p-2 bg-transparent focus:outline-none"
                        value={inputText}
                        onChange={(e) => setInputText(e.target.value)}
                        disabled={!selectedMessenger}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' && inputText.trim()) {
                            handleSend();
                          }
                        }}
                      />
                      {inputText.trim() ? (
                        <button 
                          onClick={handleSend}
                          disabled={!selectedMessenger}
                          className="p-2 bg-blue-500"
                        >
                          {/* Send icon */}
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7" />
                          </svg>
                        </button>
                      ) : (
                        <div className="flex">
                          <button className="p-2" onClick={() => fileInputRef.current?.click()}>
                            {/* Camera icon */}
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 8a4 4 0 100 8 4 4 0 000-8zm6-2h-2.586l-.707-.707A1 1 0 0013.586 5H10.414a1 1 0 00-.707.293L9 6H7a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V8a2 2 0 00-2-2z" />
                            </svg>
                          </button>
                          <button className="p-2" onClick={() => {
                            if (selectedMessenger) {
                              const heartMsg = { id: Date.now(), text: '❤️', sender: 'You' };
                              setConversations({
                                ...conversations,
                                [selectedMessenger]: [...(conversations[selectedMessenger] || []), heartMsg]
                              });
                            }
                          }}>
                            {/* Heart icon */}
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="red" viewBox="0 0 24 24">
                              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3 9.24 3 10.91 3.81 12 5.09 13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                          </svg>
                          </button>
                        </div>
                      )}
                    </div>
                    <input 
                      type="file" 
                      multiple 
                      accept="image/*,video/*,application/*"  // ...updated accept attribute...
                      ref={fileInputRef} 
                      onChange={handleSendImages} 
                      className="hidden" 
                    />
                  </div>
                </>
              ) : (
                <div className="flex flex-col justify-center items-center flex-grow">
                  <p className="text-gray-400">Select a Messenger to start chatting.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </>
    </UserLayout>
  );
};

export default MessengerPage;