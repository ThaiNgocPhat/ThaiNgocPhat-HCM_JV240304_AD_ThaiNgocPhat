import React from 'react';
import {Routes, Route } from 'react-router-dom';
import VietFood from '../nav/VietFood/VietFood';
import AsiaFood from '../nav/AsiaFood/AsiaFood';
import EuropeanFood from '../nav/EuropeanFood/EuropeanFood';
import KoreanFood from '../nav/KoreanFood/KoreanFood';
import JapaneseFood from '../nav/JapaneseFood/JapaneseFood';
import DessertsFood from '../nav/DessertsFood/DessertsFood';
import Details from '../components/Details/Details';
import ListFood from '../components/ListFood/ListFood'


export default function Index() {
  return (  
      <Routes>
        <Route path="/" element={<ListFood />} />
        <Route path="/mon-viet" element={<VietFood />} />
        <Route path="/mon-a" element={<AsiaFood />} />
        <Route path="/mon-au" element={<EuropeanFood />} />
        <Route path="/mon-han" element={<KoreanFood />} />
        <Route path="/mon-nhat" element={<JapaneseFood />} />
        <Route path="/trang-mieng" element={<DessertsFood />} />
        <Route path="/details/:id" element={<Details />} />
      </Routes>
  );
}
