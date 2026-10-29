// src/App.jsx
import { Router, Route, Link, Switch } from 'wouter-preact';
import "./styles/main.scss";
import Home from './pages/Home';
import Goals from './pages/Goals';
import Grammar from './pages/Grammar';
import NotFound from './pages/NotFound';
import Vocabs from './pages/Vocabs';
import VocabsLearn from './pages/VocabsLearn';

export default function App() {
  return (
    <Router>
      <nav style="border-bottom: 2px solid black; padding-bottom: 5px;">
        <img src="/logo.png" style="width: 50px; display: block; margin: auto; " alt="علمني انجلش" />

        <Link href="/">رئيسية</Link> | <Link href="/vocabs">كلمات</Link>
      </nav>

      <Switch>
        <Route path="/" component={Home} />
        <Route path="/goals" component={Goals} />
        <Route path="/grammar" component={Grammar} />
        <Route path="/vocabs" component={Vocabs} />
        <Route path="/vocabs/learn" component={VocabsLearn} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}