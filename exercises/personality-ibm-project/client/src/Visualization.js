import React, { Component } from 'react'
import { withResults } from './context/ResultsProvider'
import rd3 from 'react-d3-library'
import * as d3 from 'd3'
import profile from './profile.json'
import PersonalitySunburstChart from 'personality-sunburst-chart/lib/charts/v3-d3v4'
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser'

const Visualization = () => {
  
    const chart = new PersonalitySunburstChart({
      'selector':'#sunburstChart',
      'version': 'v3'
    })
    const htmlChart = { <script>
    var chart = null;
    var defaultColors = {
      traits_dark: '#5aaafa',
      traits_light: '#c0e6ff',
      facet: '#4178be',
      needs_dark: '#41d6c3',
      needs_light: '#a7fae6',
      need: '#008571',
      values_dark: '#ba8ff7',
      values_light: '#eed2ff',
      value: '#9855d4'
    };
    var options = {
      selector: '#sunburstChart',
      version: 'v2',
      d3version: 'v3',
      locale: 'en',
      colors: defaultColors
    };
    $('#personality-insights-v2').click(function() {
      if (!chart || options.version === 'v3') {
        options.version = 'v2';
        show();
      } else {
        options.version = 'v2';
        $.getJSON(getFilePath(), '', function ( profile ) {
          chart.setProfile(profile);
        });
      }
      updateButtonClasses();
    });
    $('#personality-insights-v3').click(function() {
      if (!chart || options.version === 'v2') {
        options.version = 'v3';
        show();
      } else {
        options.version = 'v3';
        $.getJSON(getFilePath(), '', function ( profile ) {
          chart.setProfile(profile);
        });
      }
      updateButtonClasses();
    });
    $('#locale-en').click(function() {
      options.locale = 'en';
      if (chart) {
        chart.setLocale('en', true);
      } else {
        show();
      }
      updateButtonClasses();
    });
    $('#locale-es').click(function() {
      options.locale = 'es';
      if (chart) {
        chart.setLocale('es', true);
      } else {
        show();
      }
      updateButtonClasses();
    });
    $('#colors-default').click(function() {
      options.colors = defaultColors;
      if (chart) {
        chart.setColors(options.colors, true);
      } else {
        show();
      }
    });
    $('#colors-random').click(function() {
      options.colors = {
        traits_dark: randomColor(),
        traits_light: randomColor(),
        facet: randomColor(),
        needs_dark: randomColor(),
        needs_light: randomColor(),
        need: randomColor(),
        values_dark: randomColor(),
        values_light: randomColor(),
        value: randomColor()
      };
      if (chart) {
        chart.setColors(options.colors, true);
      } else {
        show();
      }
    });
    function randomColor() {
      return '#'+(Math.random()*0xFFFFFF<<0).toString(16);
    }
    function updateButtonClasses() {
      if (options.locale === 'es') {
        $('#locale-en').removeClass('btn-primary').addClass('btn-default');
        $('#locale-es').removeClass('btn-default').addClass('btn-primary');
      } else {
        $('#locale-en').removeClass('btn-default').addClass('btn-primary');
        $('#locale-es').removeClass('btn-primary').addClass('btn-default');
      }
      if (options.version === 'v2') {
        $('#personality-insights-v2').removeClass('btn-default').addClass('btn-primary');
        $('#personality-insights-v3').removeClass('btn-primary').addClass('btn-default');
      } else {
        $('#personality-insights-v2').removeClass('btn-primary').addClass('btn-default');
        $('#personality-insights-v3').removeClass('btn-default').addClass('btn-primary');
      }
    }
    function getFilePath() {
      var suffix = Math.random() > 0.5 ? '_2' : '';
      return './profiles/en_' + options.version + suffix + '.json';
    }
    function show() {
      $.getJSON(getFilePath(), '', function ( profile ) {
        $('#profile').empty();
        $('#profile').append('<pre>' + JSON.stringify(profile, null, 2) + '</pre>');
        chart = new PersonalitySunburstChart(options);
        chart.show(profile, './profile_photo.jpg');
      });
    }
    // initial display
    show();
  </script> }
    return (

      <div id='sunburstChart'>
        {ReactHtmlParser(htmlChart)}
      </div>
    )
}

export default Visualization