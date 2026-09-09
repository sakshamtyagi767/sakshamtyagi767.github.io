/* ==========================================================================
   Saksham Tyagi Portfolio — Interactive Logic & Simulators
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Footer Year
  const yearEl = document.getElementById('current-year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // 2. Mobile Nav Toggle
  const mobileToggle = document.getElementById('mobile-toggle');
  const navLinks = document.getElementById('nav-links');
  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  }

  // 3. Scroll Header Effect & Active Nav Link Highlight
  const navHeader = document.querySelector('.nav-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      navHeader.classList.add('scrolled');
    } else {
      navHeader.classList.remove('scrolled');
    }
  });

  // 4. Reveal Animations on Scroll
  const revealElements = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  }, { threshold: 0.1 });

  revealElements.forEach(el => revealObserver.observe(el));

  // ==========================================================================
  // SIMULATOR 1: RFM Segment Explorer (Retail Analytics Project)
  // ==========================================================================
  const rfmData = {
    'champions': {
      title: '🏆 Champions Cohort (Top 5% Customers)',
      recency: '3 Days (Purchased recently)',
      frequency: '14 Orders (High repeat rate)',
      monetary: 'R$ 2,450.00 avg spend',
      action: 'Target with early-access VIP rewards & new product launches.'
    },
    'loyal': {
      title: '💙 Loyal Customers Cohort',
      recency: '12 Days',
      frequency: '8 Orders',
      monetary: 'R$ 1,280.00 avg spend',
      action: 'Upsell premium cross-category products to increase basket size.'
    },
    'at-risk': {
      title: '⚠️ At-Risk Cohort (Churn Risk)',
      recency: '65 Days (No recent activity)',
      frequency: '5 Orders',
      monetary: 'R$ 890.00 avg spend',
      action: 'Trigger personalized discount email sequence via n8n automation.'
    },
    'hibernating': {
      title: '💤 Hibernating Cohort',
      recency: '120+ Days',
      frequency: '1-2 Orders',
      monetary: 'R$ 115.00 avg spend',
      action: 'Low-cost win-back campaign or re-engagement survey.'
    }
  };

  const rfmButtons = document.querySelectorAll('.rfm-btn');
  const rfmDisplay = document.getElementById('rfm-display');

  function renderRFM(segmentKey) {
    const data = rfmData[segmentKey];
    if (!data || !rfmDisplay) return;
    rfmDisplay.innerHTML = `
      <div style="font-weight: 700; color: var(--accent-terracotta); margin-bottom: 8px;">${data.title}</div>
      <div class="rfm-metric-row"><span>Recency Score:</span><strong>${data.recency}</strong></div>
      <div class="rfm-metric-row"><span>Frequency Score:</span><strong>${data.frequency}</strong></div>
      <div class="rfm-metric-row"><span>Monetary Value:</span><strong>${data.monetary}</strong></div>
      <div style="margin-top: 10px; font-size: 0.8rem; color: var(--text-muted); font-style: italic;">
        💡 Strategy: ${data.action}
      </div>
    `;
  }

  // Initial render
  renderRFM('champions');

  rfmButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      rfmButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderRFM(btn.dataset.segment);
    });
  });

  // ==========================================================================
  // SIMULATOR 2: AsyncIO Concurrency Visualizer (Market Pulse Project)
  // ==========================================================================
  const runAsyncBtn = document.getElementById('run-async-benchmark');
  const syncBar = document.getElementById('sync-bar');
  const asyncBar = document.getElementById('async-bar');
  const benchLog = document.getElementById('bench-log');

  if (runAsyncBtn) {
    runAsyncBtn.addEventListener('click', () => {
      runAsyncBtn.disabled = true;
      runAsyncBtn.textContent = 'Running Fetch Benchmark...';
      
      // Reset bars
      syncBar.style.width = '0%';
      asyncBar.style.width = '0%';
      benchLog.textContent = 'Status: Executing Python AsyncIO event loop (10 asset feeds)...';
      benchLog.style.color = '#FACC15';

      // Animate Sync
      setTimeout(() => {
        syncBar.style.width = '100%';
      }, 200);

      // Animate Async
      setTimeout(() => {
        asyncBar.style.width = '59.2%';
        benchLog.textContent = '✅ Benchmark complete! AsyncIO gathered 10 feeds in parallel: 740ms vs 1,250ms (40.8% speedup)';
        benchLog.style.color = '#4ADE80';
        runAsyncBtn.disabled = false;
        runAsyncBtn.textContent = 'Run Benchmark Test ▶';
      }, 1000);
    });
  }

  // ==========================================================================
  // SIMULATOR 3: n8n Node Workflow Inspector (Email Automation Project)
  // ==========================================================================
  const nodeData = {
    'trigger': {
      title: '1. Gmail Webhook Trigger Node',
      desc: 'Listens for incoming emails with specific inquiry headers. Extracts sender email, raw body text, and attachments.'
    },
    'langchain': {
      title: '2. LangChain Intent Classifier Node',
      desc: 'Passes payload to LLM model with prompt engineering to classify sentiment and category (Job Inquiry / Client Request / Spam).'
    },
    'batch': {
      title: '3. Sequential Wait & Batch Control',
      desc: 'Enforces rate limits and batch queueing to prevent race conditions and ensure zero missed triggers.'
    },
    'action': {
      title: '4. Autonomous Response & Labeler Node',
      desc: 'Applies automated Gmail tag label and dispatches pre-drafted contextual response, saving ~10 hrs/week.'
    }
  };

  const nodeItems = document.querySelectorAll('.node-item');
  const nodeInspector = document.getElementById('node-inspector');

  function renderNodeInfo(nodeKey) {
    const info = nodeData[nodeKey];
    if (!info || !nodeInspector) return;
    nodeInspector.innerHTML = `
      <strong style="color: var(--accent-amber); display: block; margin-bottom: 4px;">${info.title}</strong>
      <p style="margin: 0; line-height: 1.45;">${info.desc}</p>
    `;
  }

  renderNodeInfo('trigger');

  nodeItems.forEach(item => {
    item.addEventListener('click', () => {
      nodeItems.forEach(n => n.classList.remove('active'));
      item.classList.add('active');
      renderNodeInfo(item.dataset.node);
    });
  });

  // ==========================================================================
  // SIMULATOR 4: CLI Terminal & Pytest Runner (System Performance Monitor)
  // ==========================================================================
  const tabCli = document.getElementById('tab-cli');
  const tabPytest = document.getElementById('tab-pytest');
  const terminalScreen = document.getElementById('terminal-screen');

  const cliOutputHTML = `
<span style="color: #4ADE80">$ sysmon --live --format json</span>
<span style="color: #A8A29E">[INFO] Capturing real-time system metrics via psutil...</span>
{
  <span style="color: #38BDF8">"hostname"</span>: <span style="color: #4ADE80">"saksham-dev-node"</span>,
  <span style="color: #38BDF8">"cpu_usage_pct"</span>: <span style="color: #FACC15">24.5</span>,
  <span style="color: #38BDF8">"ram"</span>: {
    <span style="color: #38BDF8">"total_gb"</span>: 16.0,
    <span style="color: #38BDF8">"used_gb"</span>: 6.2,
    <span style="color: #38BDF8">"percent"</span>: <span style="color: #FACC15">38.75</span>
  },
  <span style="color: #38BDF8">"top_process"</span>: {
    <span style="color: #38BDF8">"pid"</span>: 4108,
    <span style="color: #38BDF8">"name"</span>: <span style="color: #4ADE80">"python_fastapi_worker"</span>,
    <span style="color: #38BDF8">"cpu_pct"</span>: 12.1
  },
  <span style="color: #38BDF8">"status"</span>: <span style="color: #4ADE80">"HEALTHY_200_OK"</span>
}
`;

  const pytestOutputHTML = `
<span style="color: #4ADE80">$ pytest -v tests/test_sysmon.py</span>
<span style="color: #A8A29E">platform win32 -- Python 3.10.11, pytest-7.4.0</span>
collecting 21 items...

tests/test_sysmon.py::<span style="color: #FFF">test_cpu_bounds_range</span> <span style="color: #4ADE80">PASSED [ 5%]</span>
tests/test_sysmon.py::<span style="color: #FFF">test_ram_used_percentage</span> <span style="color: #4ADE80">PASSED [ 10%]</span>
tests/test_sysmon.py::<span style="color: #FFF">test_disk_partition_detection</span> <span style="color: #4ADE80">PASSED [ 15%]</span>
tests/test_sysmon.py::<span style="color: #FFF">test_json_serializability</span> <span style="color: #4ADE80">PASSED [ 20%]</span>
tests/test_sysmon.py::<span style="color: #FFF">test_fallback_env_config</span> <span style="color: #4ADE80">PASSED [ 25%]</span>
tests/test_sysmon.py::<span style="color: #FFF">test_network_dispatch_schema</span> <span style="color: #4ADE80">PASSED [ 30%]</span>
... (15 more pytest cases) ...
tests/test_sysmon.py::<span style="color: #FFF">test_cli_arg_parser_3_layer</span> <span style="color: #4ADE80">PASSED [100%]</span>

<span style="color: #4ADE80; font-weight: bold;">==================== 21 passed in 0.42s ====================</span>
`;

  if (terminalScreen) {
    terminalScreen.innerHTML = cliOutputHTML;
  }

  if (tabCli && tabPytest && terminalScreen) {
    tabCli.addEventListener('click', () => {
      tabCli.classList.add('active');
      tabPytest.classList.remove('active');
      terminalScreen.innerHTML = cliOutputHTML;
    });

    tabPytest.addEventListener('click', () => {
      tabPytest.classList.add('active');
      tabCli.classList.remove('active');
      terminalScreen.innerHTML = pytestOutputHTML;
    });
  }

  // ==========================================================================
  // TOAST NOTIFICATIONS & COPY EMAIL
  // ==========================================================================
  const toastContainer = document.getElementById('toast-container');

  function showToast(message) {
    if (!toastContainer) return;
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    toastContainer.appendChild(toast);
    setTimeout(() => {
      toast.remove();
    }, 3000);
  }

  const copyEmailBtn = document.getElementById('copy-email-btn');
  if (copyEmailBtn) {
    copyEmailBtn.addEventListener('click', () => {
      const email = copyEmailBtn.dataset.email || 'sakshamtyagi767@gmail.com';
      navigator.clipboard.writeText(email).then(() => {
        showToast('📋 Copied email address to clipboard!');
      });
    });
  }

  // ==========================================================================
  // CONTACT FORM HANDLER
  // ==========================================================================
  const contactForm = document.getElementById('portfolio-contact-form');
  const formFeedback = document.getElementById('form-feedback');

  if (contactForm && formFeedback) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('form-name').value;
      
      formFeedback.style.color = 'var(--accent-green)';
      formFeedback.textContent = `Thank you, ${name}! Your message has been sent. Saksham will get back to you shortly.`;
      
      showToast('🚀 Message sent successfully!');
      contactForm.reset();
    });
  }
});
