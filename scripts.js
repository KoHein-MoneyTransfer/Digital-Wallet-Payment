// Data for all payment methods
const paymentData = {
    wavepay: {
        title: 'Wave Pay အကောင့်များ',
        accounts: [
            { mainName: 'Wave Pay', accountName: 'Hein Hsan', number: '09966674258', logo: 'https://raw.githubusercontent.com/KoHein-MoneyTransfer/images/refs/heads/main/Wave%20Pay%20Logo.jpg', qr: 'https://raw.githubusercontent.com/KoHein-MoneyTransfer/images/refs/heads/main/Wave%20Pay%20QR.jpg', qrNote: 'Wave Pay Userအကောင့်များ ငွေလွှဲ 50L အထက် Limit ကျော်လွှဲလိုပါက ဤ QR Code ကို Scan ဖတ်၍ လွှဲပြောင်းနိုင်ပါသည်။ Note:တွင်(Buy Phone)ဟုရေးပေးပါ ခင်ဗျာ။' }
        ]
    },
    kbzpay: {
        title: 'KBZ Pay အကောင့်များ',
        accounts: [
            { mainName: 'KBZ Pay', accountName: 'Hein Hsan', number: '09777725086', logo: 'https://raw.githubusercontent.com/KoHein-MoneyTransfer/images/refs/heads/main/KBZ%20Pay.jpg', qr: 'https://raw.githubusercontent.com/KoHein-MoneyTransfer/images/refs/heads/main/KBZ%20Pay%20MMQR.jpg', qrNote: 'KBZ Pay Merchant QR မှငွေလွှဲလိုပါက ဤ QR Code ကို Scan ဖတ်၍ လွှဲပြောင်းနိုင်ပါသည်။ Note:တွင်(Buy Phone)ဟုရေးပေးပါ ခင်ဗျာ။' }
        ]
    },
    ayapay: {
        title: 'AYA Pay အကောင့်များ',
        accounts: [
            { mainName: 'AYA Pay', accountName: 'Hein Hsan', number: '09777725086', logo: 'https://raw.githubusercontent.com/KoHein-MoneyTransfer/images/refs/heads/main/AYA%20Pay.jpeg', qr: 'https://raw.githubusercontent.com/KoHein-MoneyTransfer/images/refs/heads/main/AYA%20Pay%20Merchant%20QR.jpg', qrNote: 'AYA Pay မှ ငွေလွှဲ 50L အထက် Limit ကျော်လွှဲလိုပါက ဤ Merchant QR Code ကို Scan ဖတ်၍ လွှဲပြောင်းနိုင်ပါသည်။ Note:တွင်(Buy Phone)ဟုရေးပေးပါ ခင်ဗျာ။' }
        ]
    },
    kbzbank: {
        title: 'KBZ Bank အကောင့်များ',
        accounts: [
            { mainName: 'KBZ Bank Special', accountName: 'Hein Hsan', number: '24313724300197901', logo: 'https://raw.githubusercontent.com/KoHein-MoneyTransfer/images/refs/heads/main/KBZ%20Bank.jpg' },
              { name: 'KBZ Bank ရိုးရိုး(Hein Hsan)', number: '24330124300197901', logo: 'https://raw.githubusercontent.com/KoHein-MoneyTransfer/images/refs/heads/main/KBZ%20Bank.jpg' }
        ]
    },
    ayabank: {
        title: 'AYA Bank အကောင့်များ',
        accounts: [
            { mainName: 'AYA Bank Special', accountName: 'Hein Hsan', number: '40035991319', logo: 'https://raw.githubusercontent.com/KoHein-MoneyTransfer/images/refs/heads/main/AYA%20Bank.png' },
            { mainName: 'AYA Bank ရိုးရိုး', accountName: 'Hein Hsan', number: '20024086745', logo: 'https://raw.githubusercontent.com/KoHein-MoneyTransfer/images/refs/heads/main/AYA%20Bank.png' }
        ]
    },
    yomabank: {
        title: 'Yoma Bank အကောင့်များ',
        accounts: [
            { mainName: 'Yoma Bank Flexi', accountName: 'Hein Hsan', number: '005511108021168', logo: 'https://raw.githubusercontent.com/KoHein-MoneyTransfer/images/refs/heads/main/Yoma%20Flexi.png' }
        ]
    },
    cbpay: {
        title: 'CB Bank အကောင့်များ',
        accounts: [
            { mainName: 'CB Bank Special', accountName: 'Hein Hsan', number: '0092100900000841', logo: 'https://raw.githubusercontent.com/KoHein-MoneyTransfer/images/refs/heads/main/CB%20Pay.jpg' },
            { mainName: 'CB Bank ရိုးရိုး', accountName: 'Hein Hsan', number: '0092600500007757', logo: 'https://raw.githubusercontent.com/KoHein-MoneyTransfer/images/refs/heads/main/CB%20Pay.jpg' }
        ]
    },
    usdt: {
        title: 'Tether (USDT) အကောင့်', // Changed from USDT (Tether) to Tether (USDT)
        accounts: [
            { 
                mainName: 'Tether (USDT)', // Changed from USDT to Tether (USDT)
                accountName: 'Tron (TRC20)', 
                number: 'TMf4dEDvUGywitvakvDGcR1PbLQYZmpxPu', 
                logo: 'https://raw.githubusercontent.com/KoHein-MoneyTransfer/images/refs/heads/main/USDT_Logo.png',
                qr: 'https://raw.githubusercontent.com/KoHein-MoneyTransfer/images/refs/heads/main/USDT%20(Trc20)QR.jpg',
                qrNote: 'ငွေလွှဲပြောင်းရန်အတွက် Tron (TRC20) Network ကိုသာ အသုံးပြုပေးပါရန်။ Network မှားယွင်းပါက ငွေဆုံးရှုံးနိုင်ပါသည်။'
            }
        ]
    }
};

// Functions that work on both pages
function copyToClipboard(text) {
    const tempInput = document.createElement('textarea');
    tempInput.value = text;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);
    alert('နံပါတ်ကို ကူးယူပြီးပါပြီ။');
}

function updateDateTime() {
    const now = new Date();
    const dateStr = now.toLocaleDateString('my-MM', { year: 'numeric', month: 'long', day: 'numeric' });
    const timeStr = now.toLocaleTimeString('my-MM');
    const datetimeElement = document.getElementById('datetime');
    if (datetimeElement) {
        datetimeElement.textContent = `${dateStr} | ${timeStr}`;
    }
}

function toggleQrDisplay(elementId) {
    const qrContainer = document.getElementById(elementId);
    qrContainer.style.display = qrContainer.style.display === 'flex' ? 'none' : 'flex';
}

/**
 * Shows the selected content section and hides all others.
 * @param {string} contentId The base ID of the content to show (e.g., 'home', 'chat', 'notification', 'shop').
 */
function showContent(contentId) {
    // Hide all content sections on the index page
    const allContent = document.querySelectorAll('.page-content');
    allContent.forEach(content => {
        content.style.display = 'none';
    });

    // Remove active class from all nav items
    const allNavItems = document.querySelectorAll('.bottom-nav .nav-item');
    allNavItems.forEach(item => {
        item.classList.remove('active');
    });

    // Show the selected content
    const selectedContent = document.getElementById(contentId + '-content');
    if (selectedContent) {
        selectedContent.style.display = 'block';
        
        // Set the active class on the corresponding nav item (based on onclick context)
        // Find the nav item that triggered this function and set it as active
        const clickedNavItem = event.currentTarget;
        if (clickedNavItem) {
             clickedNavItem.classList.add('active');
        }
        
        // Scroll to the top of the container after changing content
        const container = document.querySelector('.container');
        if (container) {
            container.scrollTop = 0;
        }
    }
}


// Function to handle the second page (payment-details.html)
function loadPaymentDetails() {
    const params = new URLSearchParams(window.location.search);
    const method = params.get('method');
    const accountInfoDiv = document.getElementById('account-info');
    const pageTitle = document.getElementById('page-title');

    if (!method || !paymentData[method]) {
        if(accountInfoDiv) {
            accountInfoDiv.innerHTML = '<p>အချက်အလက်ရှာမတွေ့ပါ။</p>';
        }
        if(pageTitle) {
            pageTitle.textContent = 'အမှားတစ်ခုခုဖြစ်ပေါ်ခဲ့သည်။';
        }
        return;
    }

    const details = paymentData[method];
    if(pageTitle) {
        pageTitle.textContent = details.title;
    }

    let htmlContent = '';
    details.accounts.forEach((account, index) => {
        const hasQr = account.qr ? `<button class="btn qr-btn" onclick="toggleQrDisplay('qr-container-${method}-${index}')">QR Code ပြရန်</button>` : '';
        const qrContainer = account.qr ? `
            <div id="qr-container-${method}-${index}" class="qr-display-container">
                <img src="${account.qr}" alt="${account.mainName} QR Code">
                <p>${account.qrNote}</p>
            </div>
        ` : '';

        // Conditional labels for USDT
        const accountDetailLabel = method === 'usdt' ? 'Network:' : 'Account Name:';
        const accountNumberLabel = method === 'usdt' ? 'Deposit Address:' : 'Account Number:';

        htmlContent += `
            <div class="account-card">
                <div class="account-content">
                    <img src="${account.logo}" class="account-logo" alt="${account.mainName} Logo">
                    <div class="account-details">
                        <strong>${account.mainName}</strong>
                        <span>${accountDetailLabel} <b>${account.accountName}</b></span><br>
                        <span>${accountNumberLabel} <b class="copy-target-${method}-${index}">${account.number}</b></span>
                    </div>
                </div>
                <div class="btn-group">
                    <button class="btn copy-btn" onclick="copyToClipboard('${account.number}')">📋 Copy</button>
                    ${hasQr}
                </div>
                ${qrContainer}
            </div>
        `;
    });

    if(accountInfoDiv) {
        accountInfoDiv.innerHTML = htmlContent;
    }
}

// Check which page is loaded and run the appropriate function
document.addEventListener('DOMContentLoaded', () => {
    updateDateTime();
    
    // Set initial content view on index page
    if (document.title.includes('ငွေပေးချေမှုရွေးချယ်ရန်')) {
        // Find the currently active nav item or default to 'home'
        const activeNav = document.querySelector('.bottom-nav .nav-item.active');
        const initialContentId = activeNav ? activeNav.getAttribute('onclick').match(/'(.*?)'/)[1] : 'home';
        showContent(initialContentId); 
    }

    if (document.title.includes('အကောင့်အချက်အလက်များ')) {
        loadPaymentDetails();
        
        // This is a details page, so no page switching logic is needed here.
    }
});

setInterval(updateDateTime, 1000);
