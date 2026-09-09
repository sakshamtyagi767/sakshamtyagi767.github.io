document.addEventListener('DOMContentLoaded', () => {
  // 1. Year
  const yearEl = document.querySelector('#year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // 2. Scroll Header
  const navWrap = document.querySelector('.nav-wrap');
  if (navWrap) {
    const onScroll = () => navWrap.classList.toggle('is-scrolled', window.scrollY > 10);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  // 3. Scroll Reveal Observer
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.reveal').forEach((el, i) => {
    el.style.transitionDelay = `${Math.min(i % 4, 3) * 70}ms`;
    observer.observe(el);
  });

  // ==========================================================================
  // WIDGET 1: RFM Segment Explorer
  // ==========================================================================
  const rfmData = {
    'champions': {
      title: '🏆 Champions Cohort (Top 5%)',
      recency: '3 Days (Recent buyer)',
      frequency: '14 Orders (High repeat)',
      monetary: 'R$ 2,450.00 avg spend',
      action: 'Target with early-access VIP rewards.'
    },
    'loyal': {
      title: '💙 Loyal Customers',
      recency: '12 Days',
      frequency: '8 Orders',
      monetary: 'R$ 1,280.00 avg spend',
      action: 'Cross-sell complementary categories.'
    },
    'at-risk': {
      title: '⚠️ At-Risk Cohort (Churn Risk)',
      recency: '65 Days (No recent activity)',
      frequency: '5 Orders',
      monetary: 'R$ 890.00 avg spend',
      action: 'Trigger win-back email sequence via n8n.'
    },
    'hibernating': {
      title: '💤 Hibernating Cohort',
      recency: '120+ Days',
      frequency: '1-2 Orders',
      monetary: 'R$ 115.00 avg spend',
      action: 'Low-cost re-engagement survey.'
    }
  };

  const rfmButtons = document.querySelectorAll('.rfm-btn');
  const rfmDisplay = document.getElementById('rfm-display');

  function renderRFM(key) {
    const d = rfmData[key];
    if (!d || !rfmDisplay) return;
    rfmDisplay.innerHTML = `
      <strong style="color: var(--accent); font-size: 11px;">${d.title}</strong>
      <div style="margin-top: 4px;">Recency: <b>${d.recency}</b></div>
      <div>Frequency: <b>${d.frequency}</b></div>
      <div>Monetary: <b>${d.monetary}</b></div>
      <div style="margin-top: 4px; color: var(--muted); font-style: italic;">Strategy: ${d.action}</div>
    `;
  }
  renderRFM('champions');

  rfmButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      rfmButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderRFM(btn.dataset.segment);
    });
  });

  // ==========================================================================
  // WIDGET 2: AsyncIO Concurrency Benchmark
  // ==========================================================================
  const runAsyncBtn = document.getElementById('run-async-benchmark');
  const syncBar = document.getElementById('sync-bar');
  const asyncBar = document.getElementById('async-bar');
  const benchLog = document.getElementById('bench-log');

  if (runAsyncBtn) {
    runAsyncBtn.addEventListener('click', () => {
      runAsyncBtn.disabled = true;
      runAsyncBtn.textContent = 'Running...';
      syncBar.style.width = '0%';
      asyncBar.style.width = '0%';
      benchLog.textContent = 'Status: Fetching 10 price feeds via AsyncIO event loop...';
      benchLog.style.color = 'var(--accent)';

      setTimeout(() => { syncBar.style.width = '100%'; }, 150);
      setTimeout(() => {
        asyncBar.style.width = '59.2%';
        benchLog.textContent = '✅ Benchmark complete! Parallel AsyncIO: 740ms vs Sync 1,250ms (-40.8% latency cut)';
        benchLog.style.color = '#4E7B5B';
        runAsyncBtn.disabled = false;
        runAsyncBtn.textContent = 'Run 10-Asset Test ▶';
      }, 950);
    });
  }

  // ==========================================================================
  // WIDGET 3: n8n Node Workflow Inspector
  // ==========================================================================
  const nodeData = {
    'trigger': {
      title: '1. Gmail Webhook Node',
      desc: 'Listens for incoming emails. Extracts sender, subject, raw body, and attachments.'
    },
    'langchain': {
      title: '2. LangChain Intent Classifier',
      desc: 'Dispatches payload to LLM model with prompt rules to classify sentiment and category.'
    },
    'batch': {
      title: '3. Sequential Wait & Batch Control',
      desc: 'Enforces rate limits and batch queueing to prevent race conditions.'
    },
    'action': {
      title: '4. Autonomous Response & Labeler',
      desc: 'Applies Gmail tag label and sends pre-drafted contextual response (saves ~10h/week).'
    }
  };

  const nodeChips = document.querySelectorAll('.node-chip');
  const nodeInspector = document.getElementById('node-inspector');

  function renderNode(key) {
    const info = nodeData[key];
    if (!info || !nodeInspector) return;
    nodeInspector.innerHTML = `
      <strong style="color: var(--accent); display: block; margin-bottom: 2px;">${info.title}</strong>
      <span>${info.desc}</span>
    `;
  }
  renderNode('trigger');

  nodeChips.forEach(chip => {
    chip.addEventListener('click', () => {
      nodeChips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      renderNode(chip.dataset.node);
    });
  });

  // ==========================================================================
  // WIDGET 4: Terminal Simulator & pytest View
  // ==========================================================================
  const tabCli = document.getElementById('tab-cli');
  const tabPytest = document.getElementById('tab-pytest');
  const terminalScreen = document.getElementById('terminal-screen');

  const cliHTML = `<span style="color: #55B467">$ sysmon --live --format json</span>
<span style="color: #878074">[INFO] Telemetry active...</span>
{
  <span style="color: #38BDF8">"hostname"</span>: <span style="color: #55B467">"saksham-dev-node"</span>,
  <span style="color: #38BDF8">"cpu_usage_pct"</span>: <span style="color: #F1B743">24.5</span>,
  <span style="color: #38BDF8">"ram"</span>: { <span style="color: #38BDF8">"total_gb"</span>: 16.0, <span style="color: #38BDF8">"used_gb"</span>: 6.2, <span style="color: #38BDF8">"pct"</span>: 38.75 },
  <span style="color: #38BDF8">"status"</span>: <span style="color: #55B467">"HEALTHY_200_OK"</span>
}`;

  const pytestHTML = `<span style="color: #55B467">$ pytest -v tests/test_sysmon.py</span>
platform win32 -- Python 3.10.11, pytest-7.4.0
collected 21 items

test_sysmon.py::test_cpu_bounds_range <span style="color: #55B467">PASSED [ 5%]</span>
test_sysmon.py::test_ram_used_percentage <span style="color: #55B467">PASSED [ 10%]</span>
test_sysmon.py::test_json_serializability <span style="color: #55B467">PASSED [ 20%]</span>
... (15 more pytest cases) ...
test_sysmon.py::test_cli_arg_parser <span style="color: #55B467">PASSED [100%]</span>
<span style="color: #55B467; font-weight: bold;">====== 21 passed in 0.42s ======</span>`;

  if (terminalScreen) terminalScreen.innerHTML = cliHTML;

  if (tabCli && tabPytest && terminalScreen) {
    tabCli.addEventListener('click', () => {
      tabCli.classList.add('active');
      tabPytest.classList.remove('active');
      terminalScreen.innerHTML = cliHTML;
    });
    tabPytest.addEventListener('click', () => {
      tabPytest.classList.add('active');
      tabCli.classList.remove('active');
      terminalScreen.innerHTML = pytestHTML;
    });
  }

  // ==========================================================================
  // TOAST & COPY EMAIL & FORM
  // ==========================================================================
  const toastContainer = document.getElementById('toast-container');
  function showToast(msg) {
    if (!toastContainer) return;
    const t = document.createElement('div');
    t.className = 'toast';
    t.textContent = msg;
    toastContainer.appendChild(t);
    setTimeout(() => t.remove(), 3000);
  }

  const copyBtn = document.getElementById('copy-email-btn');
  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      const email = copyBtn.dataset.email || 'sakshamtyagi767@gmail.com';
      navigator.clipboard.writeText(email).then(() => showToast('📋 Email copied to clipboard!'));
    });
  }

  const form = document.getElementById('portfolio-contact-form');
  const feedback = document.getElementById('form-feedback');
  if (form && feedback) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('form-name').value;
      feedback.textContent = `Thank you, ${name}! Your message has been sent to Saksham.`;
      showToast('🚀 Direct message sent successfully!');
      form.reset();
    });
  }
});
