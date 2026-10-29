// src/App.jsx
import { Router, Route, Link, Switch } from 'wouter-preact';
import "./styles/main.scss";
import Home from './pages/Home';
import Goals from './pages/Goals';
import Grammar from './pages/Grammar';
import NotFound from './pages/NotFound';
import Vocabs from './pages/Vocabs';

export default function App() {
  return (
    <Router>
      <nav>
        <Link href="/">رئيسية</Link> | <Link href="/goals">اهداف</Link> | <Link href="/vocabs">كلمات</Link>
      </nav>

      <Switch>
        <Route path="/" component={Home} />
        <Route path="/goals" component={Goals} />
        <Route path="/grammar" component={Grammar} />
        <Route path="/vocabs" component={Vocabs} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}